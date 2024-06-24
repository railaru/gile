import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const schema = {
  type: "object",
  properties: {
    decision_options: {
      type: "array",
      description: "Get a liist of decision options to choose from.",
      items: {
        type: "object",
        properties: {
          name: { type: "string", description: "A decision option name" },
        },
      },
    },
  },
  required: ["decision_options"],
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const decision = searchParams.get("decision");
  const description = searchParams.get("userDescription");
  const interests = searchParams.get("userInterests");
  const optionCharacterLimit = searchParams.get("optionCharacterLimit") || 60;

  const content = `
        I am a highly motivated individual who is looking to make this decision: ${decision}. 
        I am interested in ${interests}.
        A short description about me: ${description}
        Give me a list of options I can choose from to make this decision.    
        Just state the options no need for intro.        
        Max length for one option is ${optionCharacterLimit} characters.
    `;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are an expert advice giver." },
      {
        role: "user",
        content,
      },
    ],
    functions: [{ name: "get_decision_options_data", parameters: schema }],
    function_call: { name: "get_decision_options_data" },
    temperature: 0,
  });

  return new Response(
    JSON.stringify(response.choices[0].message.function_call?.arguments),
    {
      status: 200,
    }
  );
}
