/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
export declare const UpdateThreadResponseReactionsItemAddressUserProfileBackgroundImage: core.serialization.ObjectSchema<serializers.UpdateThreadResponseReactionsItemAddressUserProfileBackgroundImage.Raw, CommonApi.UpdateThreadResponseReactionsItemAddressUserProfileBackgroundImage>;
export declare namespace UpdateThreadResponseReactionsItemAddressUserProfileBackgroundImage {
    interface Raw {
        url?: string | null;
        imageBehavior?: string | null;
    }
}