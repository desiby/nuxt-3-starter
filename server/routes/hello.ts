import { defineEventHandler } from 'h3';

const now = new Date();

export default defineEventHandler(() => "Hello World, it's party time! The date/time is: " + now)

