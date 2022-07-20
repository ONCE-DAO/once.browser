import { AbstractDefaultOnce, EAMD, EAMD_duplicate, OnceMode } from "ior:esm:/tla.EAM.Once[build]"


export default class BrowserOnce extends AbstractDefaultOnce {
    eamd!: EAMD_duplicate;
    oldEamd!: EAMD;
    ENV: NodeJS.ProcessEnv = {};
    mode: OnceMode = OnceMode.BROWSER;
    async start(): Promise<void> {

    }
    global: typeof globalThis = globalThis;

    //HACK There is no eamd right now



    static async start() {
        return new this();
    }

    constructor() {
        super();
    }
}