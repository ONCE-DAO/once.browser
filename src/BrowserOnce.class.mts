import { BaseOnce, EAMD, OnceMode } from "ior:esm:/tla.EAM.Once[dev]"


export default class BrowserOnce extends BaseOnce {
    ENV: NodeJS.ProcessEnv = {};
    mode: OnceMode = OnceMode.BROWSER;
    async start(): Promise<void> {

    }
    global: typeof globalThis = globalThis;

    //HACK There is no eamd right now
    eamd!: EAMD;


    static async start() {
        return new this();
    }

    constructor() {
        super();
    }
}