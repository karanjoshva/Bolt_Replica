"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_1 = require("./prompt");
const express_1 = __importDefault(require("express"));
require("dotenv").config();
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY; // Output: <OPENROUTER_API_KEY>
const app = (0, express_1.default)();
app.use(express_1.default.json());
/*app.post("/template", async (req, res) => {
  const prompt = req.body.prompt;

  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        //"HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
        //"X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "meta-llama/llama-3.1-8b-instruct", //"deepseek/deepseek-r1-zero:free",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        system:
          "Return node or react based on what you think this project should be. Only return a single word eg. 'node' or 'react' and nothing extra.",
        temperature: 0.2,
        max_tokens: 100,
      }),
    }
  );
  const data = await response.json();
  //console.log(JSON.stringify(data.choices[0].message, null, 2));

  //console.log("Reasoning: " + data.choices[0].message.reasoning);
  //console.log("Content: " + data.choices[0].message.content);

  const answer = data.choices[0].message.content.trim().toLowerCase();
  console.log(answer);
  if (answer === "react") {
    res.json({
      prompts: [
        BASE_PROMPT,
        `The following is a list of all project files and their complete contents that are currently visible and accessible to you.\n\n${reactBasePrompt}\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n  - .gitignore\n  - package-lock.json\n`,
      ],
      uiPrompts: [reactBasePrompt],
    });
    console.log("react");
    return;
  }
  if (answer === "node") {
    res.json({
      prompts: [
        "The following is a list of all project files and their complete contents that are currently visible and accessible to you.\n\n${reactBasePrompt}\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n  - .gitignore\n  - package-lock.json\n",
      ],
      uiPrompts: [nodeBasePrompt],
    });
    console.log("Node");
    return;
  }
  res.status(403).json({ message: "You can't access this" });
  return;
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});*/
app.post("/chat", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const message = req.body.message;
    const response = yield fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            Authorization: "Bearer {OPENROUTER_API_KEY}",
            //"HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
            //"X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "meta-llama/llama-3.1-8b-instruct", //"deepseek/deepseek-r1-zero:free",
            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],
            system: (0, prompt_1.getSystemPrompt)(),
            temperature: 0.2,
            max_tokens: 10,
        }),
    });
    console.log(response);
    res.json({});
}));
`async function fetchOpenRouterAI() {
  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: 'Bearer {OPENROUTER_API_KEY}',
          //"HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
          //"X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "meta-llama/llama-3.1-8b-instruct", //"deepseek/deepseek-r1-zero:free",
          messages: [
            {
              role: "user",
              content: "Write the code for a TODO application.",
            },
          ],
          temperature: 0.2,
          max_tokens: 1000,
        }),
      }
    );
    const data = await response.json();
    //console.log(JSON.stringify(data.choices[0].message, null, 2));

    //console.log("Reasoning: " + data.choices[0].message.reasoning);
    console.log("Content: " + data.choices[0].message.content);
  } catch (error) {
    console.error(error);
  }
}

fetchOpenRouterAI();`;
function fetchOpenRouterAI() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const question = "Write code to build a TODO application with HTLM and CSS.";
            const response = yield fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    model: "deepseek/deepseek-r1-zero:free",
                    messages: [
                        {
                            role: "user",
                            content: ``,
                        },
                        {
                            role: "user",
                            content: "Project Files:\n\nThe following is a list of all project files and their complete contents that are currently visible and accessible to you.\n\n{{BASE_PROMPT}}\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n  - .gitignore\n  - package-lock.json\n  - .bolt/promp",
                        },
                        {
                            role: "user",
                            content: "<bolt_running_commands>\n</bolt_running_commands>\n\nCurrent Message:\n\ncreate a todo application\n\nFile Changes:\n\nHere is a list of all files that have been modified since the start of the conversation.\nThis information serves as the true contents of these files!\n\nThe contents include either the full file contents or a diff (when changes are smaller and localized).\n\nUse it to:\n - Understand the latest file modifications\n - Ensure your suggestions build upon the most recent version of the files\n - Make informed decisions about changes\n - Ensure suggestions are compatible with existing code\n\nsrc/App.tsx:\n```\n\n```\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n  - /home/project/.bolt/config.json",
                        },
                    ],
                    system: (0, prompt_1.getSystemPrompt)(),
                    stream: true,
                }),
            });
            const reader = (_a = response.body) === null || _a === void 0 ? void 0 : _a.getReader();
            if (!reader) {
                throw new Error("Response body is not readable");
            }
            const decoder = new TextDecoder();
            let buffer = "";
            try {
                while (true) {
                    const { done, value } = yield reader.read();
                    if (done)
                        break;
                    // Append new chunk to buffer
                    buffer += decoder.decode(value, { stream: true });
                    // Process complete lines from buffer
                    while (true) {
                        const lineEnd = buffer.indexOf("\n");
                        if (lineEnd === -1)
                            break;
                        const line = buffer.slice(0, lineEnd).trim();
                        buffer = buffer.slice(lineEnd + 1);
                        if (line.startsWith("data: ")) {
                            const data = line.slice(6);
                            if (data === "[DONE]")
                                break;
                            try {
                                const parsed = JSON.parse(data);
                                const content = parsed.choices[0].delta.content;
                                if (content) {
                                    console.log(content);
                                }
                            }
                            catch (e) {
                                // Ignore invalid JSON
                            }
                        }
                    }
                }
            }
            finally {
                reader.cancel();
            }
        }
        catch (error) {
            console.error(error);
        }
    });
}
fetchOpenRouterAI();
