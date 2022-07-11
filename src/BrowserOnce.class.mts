import { BaseOnce, EAMD, OnceMode } from "ior:esm:/tla.EAM.Once[dev]"


export default class BrowserOnce extends BaseOnce {
    ENV: NodeJS.ProcessEnv = {};
    mode: OnceMode = OnceMode.BROWSER;
    start(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    global: typeof globalThis = global;
    //HACK
    eamd!: EAMD;


    static async start() {
        return new this();
    }

    constructor() {
        super();
        this.global = global;
    }
}