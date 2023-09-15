import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const decision = searchParams.get('decision');
    const description = searchParams.get('userDescription');
    const interests = searchParams.get('userInterests');
    const optionCharacterLimit = searchParams.get('optionCharacterLimit') || 60;

    const content = `
        I am a highly motivated individual who is looking to make this decision: ${decision}. 
        I am interested in ${interests}.
        A short description about me: ${description}
        Give me a list of options I can choose from to make this decision.    
        Just state the options no need for intro.        
        Max length for one option is ${optionCharacterLimit} characters.
        The format should be a long sentence separate by commas. For example: option 1, option 2, option 3.
        No need to add numbered points. The format should be: wash dishes, take out trash, walk a dog.
        Avoid the following format:
        1. Pursue further education in a specialized field.\\n2. Explore opportunities for promotion within your current company.\\n3.       
    `;

    const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content }],
        model: 'gpt-3.5-turbo',
    });

    return new Response(JSON.stringify(completion.choices), {
        status: 200,
    });
}