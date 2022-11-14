import { sayHello } from "./util.ts";
sayHello("World");
import * as util from "./util.ts";
util.sayHello("World");
import { VERSION } from "https://deno.land/std@0.164.0/version.ts";
console.log(VERSION);