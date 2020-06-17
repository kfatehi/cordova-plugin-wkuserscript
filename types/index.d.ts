// Type definitions for cordova-plugin-cookies
// Project: https://github.com/apache/cordova-plugin-cookies
// Definitions by: Dani Palou <https://github.com/dpalou>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Window instance with the plugin object.
 */
export interface WKUserScriptWindow extends Window {
    WKUserScript?: WKUserScript;
}

/**
 * Provides some functions to add user scripts in WKWebView in iOS.
 */
interface WKUserScript {

    /**
     * Add a user script.
     *
     * @param data Data for the script to add.
     * @return Promise resolved when done.
     */
    addScript(data: {code?: string, file?: string}): Promise<void>;
}

export declare var WKUserScript: WKUserScript;
