/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Models = Models1;
/**
 * A title that will identify this model in the model selection dropdown
 */
export type Title = string;
/**
 * The unique ID of the user.
 */
export type UniqueId = string;
/**
 * The name of the model to be used (e.g. gpt-4, codellama)
 */
export type Model = string;
/**
 * A system message that will always be followed by the LLM
 */
export type SystemMessage = string;
/**
 * The maximum context length of the LLM in tokens, as counted by count_tokens.
 */
export type ContextLength = number;
/**
 * Tokens that will stop the completion.
 */
export type StopTokens = string[];
/**
 * The temperature of the completion.
 */
export type Temperature = number;
/**
 * The top_p of the completion.
 */
export type TopP = number;
/**
 * The top_k of the completion.
 */
export type TopK = number;
/**
 * The presence penalty Aof the completion.
 */
export type PresencePenalty = number;
/**
 * The frequency penalty of the completion.
 */
export type FrequencyPenalty = number;
/**
 * Set the timeout for each request to the LLM. If you are running a local LLM that takes a while to respond, you might want to set this to avoid timeouts.
 */
export type Timeout = number;
/**
 * Whether to verify SSL certificates for requests.
 */
export type VerifySsl = boolean;
/**
 * Path to a custom CA bundle to use when making the HTTP request
 */
export type CaBundlePath = string;
/**
 * Proxy URL to use when making the HTTP request
 */
export type Proxy = string;
/**
 * The API key for the LLM provider.
 */
export type ApiKey = string;
export type Saved = LLM[];

/**
 * Main class that holds the current model configuration
 */
export interface Models1 {
  default: LLM;
  summarize?: LLM;
  edit?: LLM;
  chat?: LLM;
  saved?: Saved;
  sdk?: ContinueSDK;
  [k: string]: unknown;
}
export interface LLM {
  title?: Title;
  unique_id?: UniqueId;
  model: Model;
  system_message?: SystemMessage;
  context_length?: ContextLength;
  stop_tokens?: StopTokens;
  temperature?: Temperature;
  top_p?: TopP;
  top_k?: TopK;
  presence_penalty?: PresencePenalty;
  frequency_penalty?: FrequencyPenalty;
  timeout?: Timeout;
  verify_ssl?: VerifySsl;
  ca_bundle_path?: CaBundlePath;
  proxy?: Proxy;
  headers?: Headers;
  prompt_templates?: PromptTemplates;
  api_key?: ApiKey;
  [k: string]: unknown;
}
/**
 * Headers to use when making the HTTP request
 */
export interface Headers {
  [k: string]: string;
}
/**
 * A dictionary of prompt templates that can be used to customize the behavior of the LLM in certain situations. For example, set the "edit" key in order to change the prompt that is used for the /edit slash command. Each value in the dictionary is a string templated in mustache syntax, and filled in at runtime with the variables specific to the situation. See the documentation for more information.
 */
export interface PromptTemplates {
  [k: string]: unknown;
}
export interface ContinueSDK {
  [k: string]: unknown;
}
