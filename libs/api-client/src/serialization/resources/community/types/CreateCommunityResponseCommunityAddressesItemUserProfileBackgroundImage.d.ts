/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
export declare const CreateCommunityResponseCommunityAddressesItemUserProfileBackgroundImage: core.serialization.ObjectSchema<serializers.CreateCommunityResponseCommunityAddressesItemUserProfileBackgroundImage.Raw, CommonApi.CreateCommunityResponseCommunityAddressesItemUserProfileBackgroundImage>;
export declare namespace CreateCommunityResponseCommunityAddressesItemUserProfileBackgroundImage {
    interface Raw {
        url?: string | null;
        imageBehavior?: string | null;
    }
}