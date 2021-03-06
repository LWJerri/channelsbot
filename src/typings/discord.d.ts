import { Lang } from '../langs';
import { Collection, Message, BitFieldResolvable, PermissionString } from 'discord.js';

declare module 'discord.js' {
  interface Client {
    commands: Collection<string, Command>;
    myCustomChannels: {
      forJoin: string[];
      created: string[];
    };
  }
  interface Guild {
    lang: Lang;
  }
}

export interface Command {
  msg: Message;
  permission?: BitFieldResolvable<PermissionString>;
  checkCustomPerm?: (msg: Message) => boolean;
  run: (msg: Message, args?: string[], content?: string) => Promise<any> | any;
  helper: (...args: any) => Promise<any> | any;
  name?: string;
  aliases?: string[];
  regexp: RegExp;
}
