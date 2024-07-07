// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
// });

// const formalExample = {
//   japanese: [
//     { word: "日本", reading: "にほん" },
//     { word: "に" },
//     { word: "住んで", reading: "すんで" },
//     { word: "います" },
//     { word: "か" },
//     { word: "?" },
//   ],
//   grammarBreakdown: [
//     {
//       english: "Do you live in Japan?",
//       japanese: [
//         { word: "日本", reading: "にほん" },
//         { word: "に" },
//         { word: "住んで", reading: "すんで" },
//         { word: "います" },
//         { word: "か" },
//         { word: "?" },
//       ],
//       chunks: [
//         {
//           japanese: [{ word: "日本", reading: "にほん" }],
//           meaning: "Japan",
//           grammar: "Noun",
//         },
//         {
//           japanese: [{ word: "に" }],
//           meaning: "in",
//           grammar: "Particle",
//         },
//         {
//           japanese: [{ word: "住んで", reading: "すんで" }, { word: "います" }],
//           meaning: "live",
//           grammar: "Verb + て form + います",
//         },
//         {
//           japanese: [{ word: "か" }],
//           meaning: "question",
//           grammar: "Particle",
//         },
//         {
//           japanese: [{ word: "?" }],
//           meaning: "question",
//           grammar: "Punctuation",
//         },
//       ],
//     },
//   ],
// };

// const casualExample = {
//   japanese: [
//     { word: "日本", reading: "にほん" },
//     { word: "に" },
//     { word: "住んで", reading: "すんで" },
//     { word: "いる" },
//     { word: "の" },
//     { word: "?" },
//   ],
//   grammarBreakdown: [
//     {
//       english: "Do you live in Japan?",
//       japanese: [
//         { word: "日本", reading: "にほん" },
//         { word: "に" },
//         { word: "住んで", reading: "すんで" },
//         { word: "いる" },
//         { word: "の" },
//         { word: "?" },
//       ],
//       chunks: [
//         {
//           japanese: [{ word: "日本", reading: "にほん" }],
//           meaning: "Japan",
//           grammar: "Noun",
//         },
//         {
//           japanese: [{ word: "に" }],
//           meaning: "in",
//           grammar: "Particle",
//         },
//         {
//           japanese: [{ word: "住んで", reading: "すんで" }, { word: "いる" }],
//           meaning: "live",
//           grammar: "Verb + て form + いる",
//         },
//         {
//           japanese: [{ word: "の" }],
//           meaning: "question",
//           grammar: "Particle",
//         },
//         {
//           japanese: [{ word: "?" }],
//           meaning: "question",
//           grammar: "Punctuation",
//         },
//       ],
//     },
//   ],
// };

// export async function GET(req) {
//   const speech = req.nextUrl.searchParams.get("speech") || "formal";
//   const speechExample = speech === "formal" ? formalExample : casualExample;

//   const chatCompletion = await openai.chat.completions.create({
//     messages: [
//       {
//         role: "system",
//         content: `You are a Japanese language teacher. 
// Your student asks you how to say something from english to japanese.
// You should respond with: 
// - english: the english version ex: "Do you live in Japan?"
// - japanese: the japanese translation in split into words ex: ${JSON.stringify(
//           speechExample.japanese
//         )}
// - grammarBreakdown: an explanation of the grammar structure per sentence ex: ${JSON.stringify(
//           speechExample.grammarBreakdown
//         )}
// `,
//       },
//       {
//         role: "system",
//         content: `You always respond with a JSON object with the following format: 
//         {
//           "english": "",
//           "japanese": [{
//             "word": "",
//             "reading": ""
//           }],
//           "grammarBreakdown": [{
//             "english": "",
//             "japanese": [{
//               "word": "",
//               "reading": ""
//             }],
//             "chunks": [{
//               "japanese": [{
//                 "word": "",
//                 "reading": ""
//               }],
//               "meaning": "",
//               "grammar": ""
//             }]
//           }]
//         }`,
//       },
//       {
//         role: "user",
//         content: `How to say ${
//           req.nextUrl.searchParams.get("question") ||
//           "Have you ever been to Japan?"
//         } in Japanese in ${speech} speech?`,
//       },
//     ],
//     // model: "gpt-4-turbo-preview", // https://platform.openai.com/docs/models/gpt-4-and-gpt-4-turbo
//     model: "gpt-3.5-turbo", // https://help.openai.com/en/articles/7102672-how-can-i-access-gpt-4
//     response_format: {
//       type: "json_object",
//     },
//   });
//   console.log(chatCompletion.choices[0].message.content);
//   return Response.json(JSON.parse(chatCompletion.choices[0].message.content));
// }





// import ollama from 'ollama';

// export async function POST(req) {
//   const { message, speech } = await req.json();

//   const formalExample = {
//     japanese: [
//       { word: "日本", reading: "にほん" },
//       { word: "に" },
//       { word: "住んで", reading: "すんで" },
//       { word: "います" },
//       { word: "か" },
//       { word: "?" },
//     ],
//     grammarBreakdown: [
//       {
//         english: "Do you live in Japan?",
//         japanese: [
//           { word: "日本", reading: "にほん" },
//           { word: "に" },
//           { word: "住んで", reading: "すんで" },
//           { word: "います" },
//           { word: "か" },
//           { word: "?" },
//         ],
//         chunks: [
//           {
//             japanese: [{ word: "日本", reading: "にほん" }],
//             meaning: "Japan",
//             grammar: "Noun",
//           },
//           {
//             japanese: [{ word: "に" }],
//             meaning: "in",
//             grammar: "Particle",
//           },
//           {
//             japanese: [{ word: "住んで", reading: "すんで" }, { word: "います" }],
//             meaning: "live",
//             grammar: "Verb + て form + います",
//           },
//           {
//             japanese: [{ word: "か" }],
//             meaning: "question",
//             grammar: "Particle",
//           },
//           {
//             japanese: [{ word: "?" }],
//             meaning: "question",
//             grammar: "Punctuation",
//           },
//         ],
//       },
//     ],
//   };

//   const casualExample = {
//     japanese: [
//       { word: "日本", reading: "にほん" },
//       { word: "に" },
//       { word: "住んで", reading: "すんで" },
//       { word: "いる" },
//       { word: "の" },
//       { word: "?" },
//     ],
//     grammarBreakdown: [
//       {
//         english: "Do you live in Japan?",
//         japanese: [
//           { word: "日本", reading: "にほん" },
//           { word: "に" },
//           { word: "住んで", reading: "すんで" },
//           { word: "いる" },
//           { word: "の" },
//           { word: "?" },
//         ],
//         chunks: [
//           {
//             japanese: [{ word: "日本", reading: "にほん" }],
//             meaning: "Japan",
//             grammar: "Noun",
//           },
//           {
//             japanese: [{ word: "に" }],
//             meaning: "in",
//             grammar: "Particle",
//           },
//           {
//             japanese: [{ word: "住んで", reading: "すんで" }, { word: "いる" }],
//             meaning: "live",
//             grammar: "Verb + て form + いる",
//           },
//           {
//             japanese: [{ word: "の" }],
//             meaning: "question",
//             grammar: "Particle",
//           },
//           {
//             japanese: [{ word: "?" }],
//             meaning: "question",
//             grammar: "Punctuation",
//           },
//         ],
//       },
//     ],
//   };

//   const speechExample = speech === 'formal' ? formalExample : casualExample;

//   const systemMessage = `You are a Japanese language teacher. Your student asks you how to say something from English to Japanese. You should respond with:
// - english: the English version ex: "Do you live in Japan?"
// - japanese: the Japanese translation split into words ex: ${JSON.stringify(speechExample.japanese)}
// - grammarBreakdown: an explanation of the grammar structure per sentence ex: ${JSON.stringify(speechExample.grammarBreakdown)}`;

//   const formatMessage = `You always respond with a JSON object with the following format:
// {
//   "english": "",
//   "japanese": [{
//     "word": "",
//     "reading": ""
//   }],
//   "grammarBreakdown": [{
//     "english": "",
//     "japanese": [{
//       "word": "",
//       "reading": ""
//     }],
//     "chunks": [{
//       "japanese": [{
//         "word": "",
//         "reading": ""
//       }],
//       "meaning": "",
//       "grammar": ""
//     }]
//   }]
// }`;

//   const userQuestion = `How to say ${message || "Have you ever been to Japan?"} in Japanese in ${speech || "formal"} speech?`;

//   try {
//     // Create the message object
//     const userMessage = { role: 'user', content: userQuestion };

//     // Call ollama.chat with stream set to true
//     const response = await ollama.chat({
//       model: 'phi3',
//       messages: [
//         { role: 'system', content: systemMessage },
//         { role: 'system', content: formatMessage },
//         userMessage,
//       ],
//       stream: true,
//     });

//     // Accumulate the streamed response
//     let aiResponseContent = '';
//     for await (const part of response) {
//       aiResponseContent += part.message.content;
//     }

//     return new Response(JSON.stringify({ content: aiResponseContent }), {
//       status: 200,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   } catch (error) {
//     console.error('Error communicating with AI model:', error);
//     return new Response(JSON.stringify({ error: 'Failed to communicate with AI model' }), {
//       status: 500,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   }
// }

// import ollama from 'ollama';

// export async function GET(req) {
//   const { message, speech } = await req.json();

//   const formalExample = {
//     japanese: [
//       { word: "日本", reading: "にほん" },
//       { word: "に" },
//       { word: "住んで", reading: "すんで" },
//       { word: "います" },
//       { word: "か" },
//       { word: "?" },
//     ],
//     grammarBreakdown: [
//       {
//         english: "Do you live in Japan?",
//         japanese: [
//           { word: "日本", reading: "にほん" },
//           { word: "に" },
//           { word: "住んで", reading: "すんで" },
//           { word: "います" },
//           { word: "か" },
//           { word: "?" },
//         ],
//         chunks: [
//           {
//             japanese: [{ word: "日本", reading: "にほん" }],
//             meaning: "Japan",
//             grammar: "Noun",
//           },
//           {
//             japanese: [{ word: "に" }],
//             meaning: "in",
//             grammar: "Particle",
//           },
//           {
//             japanese: [{ word: "住んで", reading: "すんで" }, { word: "います" }],
//             meaning: "live",
//             grammar: "Verb + て form + います",
//           },
//           {
//             japanese: [{ word: "か" }],
//             meaning: "question",
//             grammar: "Particle",
//           },
//           {
//             japanese: [{ word: "?" }],
//             meaning: "question",
//             grammar: "Punctuation",
//           },
//         ],
//       },
//     ],
//   };

//   const casualExample = {
//     japanese: [
//       { word: "日本", reading: "にほん" },
//       { word: "に" },
//       { word: "住んで", reading: "すんで" },
//       { word: "いる" },
//       { word: "の" },
//       { word: "?" },
//     ],
//     grammarBreakdown: [
//       {
//         english: "Do you live in Japan?",
//         japanese: [
//           { word: "日本", reading: "にほん" },
//           { word: "に" },
//           { word: "住んで", reading: "すんで" },
//           { word: "いる" },
//           { word: "の" },
//           { word: "?" },
//         ],
//         chunks: [
//           {
//             japanese: [{ word: "日本", reading: "にほん" }],
//             meaning: "Japan",
//             grammar: "Noun",
//           },
//           {
//             japanese: [{ word: "に" }],
//             meaning: "in",
//             grammar: "Particle",
//           },
//           {
//             japanese: [{ word: "住んで", reading: "すんで" }, { word: "いる" }],
//             meaning: "live",
//             grammar: "Verb + て form + いる",
//           },
//           {
//             japanese: [{ word: "の" }],
//             meaning: "question",
//             grammar: "Particle",
//           },
//           {
//             japanese: [{ word: "?" }],
//             meaning: "question",
//             grammar: "Punctuation",
//           },
//         ],
//       },
//     ],
//   };

//   const speechExample = speech === 'formal' ? formalExample : casualExample;

//   const systemMessage = `You are a Japanese language teacher. Your student asks you how to say something from English to Japanese. You should respond with:
// - english: the English version ex: "Do you live in Japan?"
// - japanese: the Japanese translation split into words ex: ${JSON.stringify(speechExample.japanese)}
// - grammarBreakdown: an explanation of the grammar structure per sentence ex: ${JSON.stringify(speechExample.grammarBreakdown)}`;

//   const formatMessage = `You always respond with a JSON object with the following format:
// {
//   "english": "",
//   "japanese": [{
//     "word": "",
//     "reading": ""
//   }],
//   "grammarBreakdown": [{
//     "english": "",
//     "japanese": [{
//       "word": "",
//       "reading": ""
//     }],
//     "chunks": [{
//       "japanese": [{
//         "word": "",
//         "reading": ""
//       }],
//       "meaning": "",
//       "grammar": ""
//     }]
//   }]
// }`;

//   const userQuestion = `How to say ${message || "Have you ever been to Japan?"} in Japanese in ${speech || "formal"} speech?`;

//   try {
//     // Create the message object
//     const userMessage = { role: 'user', content: userQuestion };

//     // Call ollama.chat with stream set to true
//     const response = await ollama.chat({
//       model: 'phi3',
//       messages: [
//         { role: 'system', content: systemMessage },
//         { role: 'system', content: formatMessage },
//         userMessage,
//       ],
//       stream: true,
//     });

//     // Accumulate the streamed response
//     let aiResponseContent = '';
//     for await (const part of response) {
//       aiResponseContent += part.message.content;
//     }

//     return new Response(JSON.stringify({ content: aiResponseContent }), {
//       status: 200,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   } catch (error) {
//     console.error('Error communicating with AI model:', error);
//     return new Response(JSON.stringify({ error: 'Failed to communicate with AI model' }), {
//       status: 500,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   }
// }



// import ollama from 'ollama';

// export async function POST(req) {
//   const { message } = await req.json();

//   const systemMessage = `Hello! I am your friendly AI assistant. How can I assist you today?`;

//   const formatMessage = `Please provide me with a question or statement, and I'll do my best to help you!`;

//   const userQuestion = message || "Hello, how can I help you today?";

//   try {
//     // Create the message object
//     const userMessage = { role: 'user', content: userQuestion };

//     // Call ollama.chat with stream set to true
//     const response = await ollama.chat({
//       model: 'phi3',
//       messages: [
//         { role: 'system', content: systemMessage },
//         { role: 'system', content: formatMessage },
//         userMessage,
//       ],
//       stream: true,
//     });

//     // Accumulate the streamed response
//     let aiResponseContent = '';
//     for await (const part of response) {
//       aiResponseContent += part.message.content;
//     }

//     return new Response(JSON.stringify({ content: aiResponseContent }), {
//       status: 200,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   } catch (error) {
//     console.error('Error communicating with AI model:', error);
//     return new Response(JSON.stringify({ error: 'Failed to communicate with AI model' }), {
//       status: 500,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   }
// }


// import ollama from 'ollama';

// export async function GET(res) {
//   try {
//     const { message } = await res.json();

//     const systemMessage = `Hello! I am your friendly AI assistant. How can I assist you today?`;

//     const formatMessage = `Please provide me with a question or statement, and I'll do my best to help you!`;

//     const userQuestion = message || "Hello, how can I help you today?";

//     // Create the message object
//     const userMessage = { role: 'user', content: userQuestion };

//     // Call ollama.chat with stream set to true
//     const response = await ollama.chat({
//       model: 'phi3',
//       messages: [
//         { role: 'system', content: systemMessage },
//         { role: 'system', content: formatMessage },
//         userMessage,
//       ],
//       stream: true,
//     });


// import ollama from 'ollama'

// const message = { role: 'user', content: 'Why is the sky blue?' }
// const response = await ollama.chat({ model: 'llama2', messages: [message], stream: true })
// for await (const part of response) {
//   process.stdout.write(part.message.content)
// }

//     // Accumulate the streamed response
//     let aiResponseContent = '';
//     for await (const part of response) {
//       aiResponseContent += part.message.content;
//     }

//     return new Response(JSON.stringify({ content: aiResponseContent }), {
//       status: 200,
//       headers: {
//         'type': 'json_object',
//       },
//     });
//   } catch (error) {
//     console.error('Error communicating with AI model:', error);
//     return new Response(JSON.stringify({ error: 'Failed to process your request' }), {
//       status: 500,
//       headers: {
//         'type': 'json_object',
//       },
//     });
//   }
// }








// import { LL } from 'ollama';
// const llaMa = new LLamA();
// const LLaMA = require('ollama').LLaMA;

// export async function GET(req) {
//   const speech = req.nextUrl.searchParams.get("speech") || "formal";
//   const speechExample = speech === "formal" ? formalExample : casualExample;

//   const chatCompletion = await llaMa.generate({
//     prompt: `You are a Japanese language teacher. Your student asks you how to say something from english to
// japanese. You should respond with:
// - english: the english version ex: "${JSON.stringify(speechExample.english)}"
// - japanese: the japanese translation in split into words ex: ${JSON.stringify(speechExample.japanese)}
// - grammarBreakdown: an explanation of the grammar structure per sentence ex:
// ${JSON.stringify(speechExample.grammarBreakdown)}

// ${req.nextUrl.searchParams.get("question") || "Have you ever been to Japan?"} in Japanese in ${speech} speech?`,
//     length: 200, // adjust this value as needed
//     temperature: 0.9, // adjust this value as needed
//     model: 'llama-3', // use LLaMA-3 instead of gpt-3.5-turbo
//   });

//   console.log(chatCompletion);
//   return Response.json(JSON.parse(chatCompletion));
// }


// import axios from 'axios';

// const geminiApiUrl = 'https://generativelanguage.googleapis.com';
// const geminiApiKey = process.env.GEMINI_API_KEY;

// const formalExample = {
//   japanese: [
//     { word: "日本", reading: "にほん" },
//     { word: "に" },
//     { word: "住んで", reading: "すんで" },
//     { word: "います" },
//     { word: "か" },
//     { word: "?" },
//   ],
//   grammarBreakdown: [
//     {
//       english: "Do you live in Japan?",
//       japanese: [
//         { word: "日本", reading: "にほん" },
//         { word: "に" },
//         { word: "住んで", reading: "すんで" },
//         { word: "います" },
//         { word: "か" },
//         { word: "?" },
//       ],
//       chunks: [
//         {
//           japanese: [{ word: "日本", reading: "にほん" }],
//           meaning: "Japan",
//           grammar: "Noun",
//         },
//         {
//           japanese: [{ word: "に" }],
//           meaning: "in",
//           grammar: "Particle",
//         },
//         {
//           japanese: [{ word: "住んで", reading: "すんで" }, { word: "います" }],
//           meaning: "live",
//           grammar: "Verb + て form + います",
//         },
//         {
//           japanese: [{ word: "か" }],
//           meaning: "question",
//           grammar: "Particle",
//         },
//         {
//           japanese: [{ word: "?" }],
//           meaning: "question",
//           grammar: "Punctuation",
//         },
//       ],
//     },
//   ],
// };

// const casualExample = {
//   japanese: [
//     { word: "日本", reading: "にほん" },
//     { word: "に" },
//     { word: "住んで", reading: "すんで" },
//     { word: "いる" },
//     { word: "の" },
//     { word: "?" },
//   ],
//   grammarBreakdown: [
//     {
//       english: "Do you live in Japan?",
//       japanese: [
//         { word: "日本", reading: "にほん" },
//         { word: "に" },
//         { word: "住んで", reading: "すんで" },
//         { word: "いる" },
//         { word: "の" },
//         { word: "?" },
//       ],
//       chunks: [
//         {
//           japanese: [{ word: "日本", reading: "にほん" }],
//           meaning: "Japan",
//           grammar: "Noun",
//         },
//         {
//           japanese: [{ word: "に" }],
//           meaning: "in",
//           grammar: "Particle",
//         },
//         {
//           japanese: [{ word: "住んで", reading: "すんで" }, { word: "いる" }],
//           meaning: "live",
//           grammar: "Verb + て form + いる",
//         },
//         {
//           japanese: [{ word: "の" }],
//           meaning: "question",
//           grammar: "Particle",
//         },
//         {
//           japanese: [{ word: "?" }],
//           meaning: "question",
//           grammar: "Punctuation",
//         },
//       ],
//     },
//   ],
// };

// export async function GET(req) {
//   const speech = req.nextUrl.searchParams.get("speech") || "formal";
//   const speechExample = speech === "formal" ? formalExample : casualExample;

//   const prompt = `You are a Japanese language teacher. 
// Your student asks you how to say something from english to japanese.
// You should respond with: 
// - english: the english version ex: "Do you live in Japan?"
// - japanese: the japanese translation in split into words ex: ${JSON.stringify(
//     speechExample.japanese
//   )}
// - grammarBreakdown: an explanation of the grammar structure per sentence ex: ${JSON.stringify(
//     speechExample.grammarBreakdown
//   )}
// `;

//   const question = req.nextUrl.searchParams.get("question") || "Have you ever been to Japan?";
//   const input = `How to say ${question} in Japanese in ${speech} speech?`;

//   const headers = {
//     'Authorization': `Bearer ${geminiApiKey}`,
//     'Content-Type': 'application/json',
//   };

//   const data = {
//     'prompt': prompt,
//     'input': input,
//     'temperature': 0.5,
//     'max_tokens': 1024,
//   };

//   try {
//     const response = await axios.post(geminiApiUrl, data, { headers });
//     const result = response.data;
//     console.log(result);
//     return Response.json(result);
//   } catch (error) {
//     console.error(error);
//     return Response.status(500).json({ error: 'Failed to generate text' });
//   }
// }




// import { Ollama } from "ollama";

// const ollama = new Ollama({
//   endpoint:"http://localhost:11434/api/generate",
// });

// const formalExample = {
//   japanese: [
//     { word: "日本", reading: "にほん" },
//     { word: "に" },
//     { word: "住んで", reading: "すんで" },
//     { word: "います" },
//     { word: "か" },
//     { word: "?" },
//   ],
//   grammarBreakdown: [
//     {
//       english: "Do you live in Japan?",
//       japanese: [
//         { word: "日本", reading: "にほん" },
//         { word: "に" },
//         { word: "住んで", reading: "すんで" },
//         { word: "います" },
//         { word: "か" },
//         { word: "?" },
//       ],
//       chunks: [
//         {
//           japanese: [{ word: "日本", reading: "にほん" }],
//           meaning: "Japan",
//           grammar: "Noun",
//         },
//         {
//           japanese: [{ word: "に" }],
//           meaning: "in",
//           grammar: "Particle",
//         },
//         {
//           japanese: [{ word: "住んで", reading: "すんで" }, { word: "います" }],
//           meaning: "live",
//           grammar: "Verb + て form + います",
//         },
//         {
//           japanese: [{ word: "か" }],
//           meaning: "question",
//           grammar: "Particle",
//         },
//         {
//           japanese: [{ word: "?" }],
//           meaning: "question",
//           grammar: "Punctuation",
//         },
//       ],
//     },
//   ],
// };

// const casualExample = {
//   japanese: [
//     { word: "日本", reading: "にほん" },
//     { word: "に" },
//     { word: "住んで", reading: "すんで" },
//     { word: "いる" },
//     { word: "の" },
//     { word: "?" },
//   ],
//   grammarBreakdown: [
//     {
//       english: "Do you live in Japan?",
//       japanese: [
//         { word: "日本", reading: "にほん" },
//         { word: "に" },
//         { word: "住んで", reading: "すんで" },
//         { word: "いる" },
//         { word: "の" },
//         { word: "?" },
//       ],
//       chunks: [
//         {
//           japanese: [{ word: "日本", reading: "にほん" }],
//           meaning: "Japan",
//           grammar: "Noun",
//         },
//         {
//           japanese: [{ word: "に" }],
//           meaning: "in",
//           grammar: "Particle",
//         },
//         {
//           japanese: [{ word: "住んで", reading: "すんで" }, { word: "いる" }],
//           meaning: "live",
//           grammar: "Verb + て form + いる",
//         },
//         {
//           japanese: [{ word: "の" }],
//           meaning: "question",
//           grammar: "Particle",
//         },
//         {
//           japanese: [{ word: "?" }],
//           meaning: "question",
//           grammar: "Punctuation",
//         },
//       ],
//     },
//   ],
// };

// export async function GET(req) {
//   const speech = req.nextUrl.searchParams.get("speech") || "formal";
//   const speechExample = speech === "formal" ? formalExample : casualExample;

//   const prompt = `You are a Japanese language teacher. 
// Your student asks you how to say something from english to japanese.
// You should respond with: 
// - english: the english version ex: "Do you live in Japan?"
// - japanese: the japanese translation in split into words ex: ${JSON.stringify(
//     speechExample.japanese
//   )}
// - grammarBreakdown: an explanation of the grammar structure per sentence ex: ${JSON.stringify(
//     speechExample.grammarBreakdown
//   )}
// `;

//   const input = `How to say ${
//     req.nextUrl.searchParams.get("question") || "Have you ever been to Japan?"
//   } in Japanese in ${speech} speech?`;

//   const response = await ollama.generate(prompt, input, {
//     model: "phi3", // Replace with your desired Ollama model
//     response_format: "json",
//   });

//   console.log(response);
//   return Response.json(response);
// }



// import { NextResponse } from "next/server";

// const formalExample = {
//   japanese: [
//     { word: "あなた", reading: "anata" },
//     { word: "は", reading: "wa" },
//     { word: "日本", reading: "nihon" },
//     { word: "に", reading: "ni" },
//     { word: "住んでいますか", reading: "sundeimasu ka" }
//   ],
//   grammarBreakdown: [
//     {
//       english: "Do you live in Japan?",
//       japanese: [
//         { word: "あなた", reading: "anata" },
//         { word: "は", reading: "wa" },
//         { word: "日本", reading: "nihon" },
//         { word: "に", reading: "ni" },
//         { word: "住んでいますか", reading: "sundeimasu ka" }
//       ],
//       chunks: [
//         {
//           japanese: [{ word: "あなた", reading: "anata" }],
//           meaning: "you",
//           grammar: "subject"
//         },
//         {
//           japanese: [{ word: "は", reading: "wa" }],
//           meaning: "(topic marker)",
//           grammar: "particle"
//         },
//         {
//           japanese: [{ word: "日本", reading: "nihon" }],
//           meaning: "Japan",
//           grammar: "noun"
//         },
//         {
//           japanese: [{ word: "に", reading: "ni" }],
//           meaning: "in",
//           grammar: "particle"
//         },
//         {
//           japanese: [{ word: "住んでいますか", reading: "sundeimasu ka" }],
//           meaning: "do you live?",
//           grammar: "verb"
//         }
//       ]
//     }
//   ]
// };

// const casualExample = {
//   japanese: [
//     { word: "君", reading: "kimi" },
//     { word: "は", reading: "wa" },
//     { word: "日本", reading: "nihon" },
//     { word: "に", reading: "ni" },
//     { word: "住んでる?", reading: "sunderu?" }
//   ],
//   grammarBreakdown: [
//     {
//       english: "Do you live in Japan?",
//       japanese: [
//         { word: "君", reading: "kimi" },
//         { word: "は", reading: "wa" },
//         { word: "日本", reading: "nihon" },
//         { word: "に", reading: "ni" },
//         { word: "住んでる?", reading: "sunderu?" }
//       ],
//       chunks: [
//         {
//           japanese: [{ word: "君", reading: "kimi" }],
//           meaning: "you",
//           grammar: "subject"
//         },
//         {
//           japanese: [{ word: "は", reading: "wa" }],
//           meaning: "(topic marker)",
//           grammar: "particle"
//         },
//         {
//           japanese: [{ word: "日本", reading: "nihon" }],
//           meaning: "Japan",
//           grammar: "noun"
//         },
//         {
//           japanese: [{ word: "に", reading: "ni" }],
//           meaning: "in",
//           grammar: "particle"
//         },
//         {
//           japanese: [{ word: "住んでる?", reading: "sunderu?" }],
//           meaning: "do you live?",
//           grammar: "verb"
//         }
//       ]
//     }
//   ]
// };

// export async function GET(req) {
//   const speech = req.nextUrl.searchParams.get("speech") || "formal";
//   const speechExample = speech === "formal" ? formalExample : casualExample;

//   const chatCompletion = await generateOllamaResponse({
//     messages: [
//       {
//         role: "system",
//         content: `You are a Japanese language teacher. 
// Your student asks you how to say something from English to Japanese.
// You should respond with: 
// - english: the English version ex: "Do you live in Japan?"
// - japanese: the Japanese translation split into words ex: ${JSON.stringify(
//           speechExample.japanese
//         )}
// - grammarBreakdown: an explanation of the grammar structure per sentence ex: ${JSON.stringify(
//           speechExample.grammarBreakdown
//         )}
// `
//       },
//       {
//         role: "system",
//         content: `You always respond with a JSON object with the following format: 
//         {
//           "english": "",
//           "japanese": [{
//             "word": "",
//             "reading": ""
//           }],
//           "grammarBreakdown": [{
//             "english": "",
//             "japanese": [{
//               "word": "",
//               "reading": ""
//             }],
//             "chunks": [{
//               "japanese": [{
//                 "word": "",
//                 "reading": ""
//               }],
//               "meaning": "",
//               "grammar": ""
//             }]
//           }]
//         }`
//       },
//       {
//         role: "user",
//         content: `How to say ${
//           req.nextUrl.searchParams.get("question") ||
//           "Have you ever been to Japan?"
//         } in Japanese in ${speech} speech?`
//       }
//     ],
//     model: "phi3",
//     response_format: {
//       type: "json_object"
//     }
//   });

//   console.log(chatCompletion.choices[0].message.content);
//   return NextResponse.json(JSON.parse(chatCompletion.choices[0].message.content));
// }

// async function generateOllamaResponse(payload) {
//   const url = process.env.OLLAMA_API_URL;
//   const response = await fetch(`${url}/api/chat`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(payload)
//   });
//   if (!response.ok) {
//     throw new Error("Failed to fetch data from Ollama API");
//   }
//   const data = await response.json();
//   return data;
// }




// import { Ollama } from 'ollama';

// const ollama = new Ollama({ host: 'http://127.0.0.1:11434' });

// const formalExample = {
//   japanese: [
//     { word: "日本", reading: "にほん" },
//     { word: "に" },
//     { word: "住んで", reading: "すんで" },
//     { word: "います" },
//     { word: "か" },
//     { word: "?" },
//   ],
//   grammarBreakdown: [
//     {
//       english: "Do you live in Japan?",
//       japanese: [
//         { word: "日本", reading: "にほん" },
//         { word: "に" },
//         { word: "住んで", reading: "すんで" },
//         { word: "います" },
//         { word: "か" },
//         { word: "?" },
//       ],
//       chunks: [
//         {
//           japanese: [{ word: "日本", reading: "にほん" }],
//           meaning: "Japan",
//           grammar: "Noun",
//         },
//         {
//           japanese: [{ word: "に" }],
//           meaning: "in",
//           grammar: "Particle",
//         },
//         {
//           japanese: [{ word: "住んで", reading: "すんで" }, { word: "います" }],
//           meaning: "live",
//           grammar: "Verb + て form + います",
//         },
//         {
//           japanese: [{ word: "か" }],
//           meaning: "question",
//           grammar: "Particle",
//         },
//         {
//           japanese: [{ word: "?" }],
//           meaning: "question",
//           grammar: "Punctuation",
//         },
//       ],
//     },
//   ],
// };

// const casualExample = {
//   japanese: [
//     { word: "日本", reading: "にほん" },
//     { word: "に" },
//     { word: "住んで", reading: "すんで" },
//     { word: "いる" },
//     { word: "の" },
//     { word: "?" },
//   ],
//   grammarBreakdown: [
//     {
//       english: "Do you live in Japan?",
//       japanese: [
//         { word: "日本", reading: "にほん" },
//         { word: "に" },
//         { word: "住んで", reading: "すんで" },
//         { word: "いる" },
//         { word: "の" },
//         { word: "?" },
//       ],
//       chunks: [
//         {
//           japanese: [{ word: "日本", reading: "にほん" }],
//           meaning: "Japan",
//           grammar: "Noun",
//         },
//         {
//           japanese: [{ word: "に" }],
//           meaning: "in",
//           grammar: "Particle",
//         },
//         {
//           japanese: [{ word: "住んで", reading: "すんで" }, { word: "いる" }],
//           meaning: "live",
//           grammar: "Verb + て form + いる",
//         },
//         {
//           japanese: [{ word: "の" }],
//           meaning: "question",
//           grammar: "Particle",
//         },
//         {
//           japanese: [{ word: "?" }],
//           meaning: "question",
//           grammar: "Punctuation",
//         },
//       ],
//     },
//   ],
// };

// export async function GET(req) {
//   const speech = req.nextUrl.searchParams.get("speech");
 

//   const response = await ollama.chat({
//     model: 'llama2',
//     messages: [
//       {
//         role: "system",
//         content: `You are a Japanese language teacher.
// Your student asks you how to say something from English to Japanese.
// You should respond with:
// - japanese: the Japanese translation split into words
// `,
//       },
//       {
//         role: "system",
//         content: `You always respond with a JSON object with the following format:
// {
//     "chunks": [{
//       "japanese": [{
//         "word": "",
//         "reading": ""
//       }],
//       "meaning": "",
//       "grammar": ""
//     }]
//   }]
// }`,
//       },
//       {
//         role: "user",
//         content: `How to say ${
//           req.nextUrl.searchParams.get("question") ||
//           "Have you ever been to Japan?"
//         } in Japanese in ${speech} speech?`,
//       },
//     ],
//     stream: true,
//   });

//   let finalResponse = "";

//   // Check if the response is an AbortableAsyncIterator
//   if (response && response[Symbol.asyncIterator]) {
//     try {
//       for await (const chunk of response) {
//         if (chunk.message && chunk.message.content) {
//           finalResponse += chunk.message.content;
//         }
//       }
//       console.log('\nResponse stream ended.');
//     } catch (error) {
//       console.error('An error occurred while processing the stream:', error);
//     }
//   } else {
//     console.log('Received non-streaming response:', response);
//   }

//   // Parse the final response and return it
//   try {
//     const jsonResponse = JSON.parse(finalResponse);
//     return Response.json(jsonResponse);
//   } catch (error) {
//     console.error('Failed to parse JSON response:', error);
//     return Response.json({ error: 'Failed to parse response' }, { status: 500 });
//   }
// }


import { Ollama } from 'ollama';

const ollama = new Ollama({ host: 'http://127.0.0.1:11434' });

export async function GET(req) {
  const speech = req.nextUrl.searchParams.get("speech") || "formal";
  const question = req.nextUrl.searchParams.get("question") || "Have you ever been to Japan?";

  const response = await ollama.chat({
    model: 'llama2',
    messages: [
      {
        role: "system",
        content: `You are a Japanese language teacher. 
Your student asks you how to say something from English to Japanese.
You should respond with a JSON object with the following format: 
{
  "english": "",
  "japanese": [{
    "word": "",
    "reading": ""
  }],
  "grammarBreakdown": [{
    "english": "",
    "japanese": [{
      "word": "",
      "reading": ""
    }],
    "chunks": [{
      "japanese": [{
        "word": "",
        "reading": ""
      }],
      "meaning": "",
      "grammar": ""
    }]
  }]
}`,
      },
      {
        role: "user",
        content: `How to say "${question}" in Japanese in ${speech} speech?`,
      },
    ],
    stream: true,
  });

  let finalResponse = "";

  // Check if the response is an AbortableAsyncIterator
  if (response && response[Symbol.asyncIterator]) {
    try {
      for await (const chunk of response) {
        if (chunk.message && chunk.message.content) {
          finalResponse += chunk.message.content;
        }
      }
      console.log('\nResponse stream ended.');
    } catch (error) {
      console.error('An error occurred while processing the stream:', error);
    }
  } else {
    console.log('Received non-streaming response:', response);
  }

  // Parse the final response and return it
  try {
    const jsonResponse = JSON.parse(finalResponse);
    return Response.json(jsonResponse);
  } catch (error) {
    console.error('Failed to parse JSON response:', error);
    return Response.json({ error: 'Failed to parse response' }, { status: 500 });
  }
}
