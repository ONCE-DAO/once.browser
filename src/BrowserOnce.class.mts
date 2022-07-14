import { AbstractDefaultOnce, EAMDInterface, EAMDInterfaceOld, OnceMode } from "ior:esm:/tla.EAM.Once[build]"


export default class BrowserOnce extends AbstractDefaultOnce {
    eamd!: EAMDInterface;
    oldEamd!: EAMDInterfaceOld;
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