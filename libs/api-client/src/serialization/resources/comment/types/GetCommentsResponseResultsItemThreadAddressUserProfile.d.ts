/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetCommentsResponseResultsItemThreadAddressUserProfileBackgroundImage } from "./GetCommentsResponseResultsItemThreadAddressUserProfileBackgroundImage";
export declare const GetCommentsResponseResultsItemThreadAddressUserProfile: core.serialization.ObjectSchema<serializers.GetCommentsResponseResultsItemThreadAddressUserProfile.Raw, CommonApi.GetCommentsResponseResultsItemThreadAddressUserProfile>;
export declare namespace GetCommentsResponseResultsItemThreadAddressUserProfile {
    interface Raw {
        name?: string | null;
        email?: string | null;
        website?: string | null;
        bio?: string | null;
        avatar_url?: string | null;
        slug?: string | null;
        socials?: string[] | null;
        background_image?: GetCommentsResponseResultsItemThreadAddressUserProfileBackgroundImage.Raw | null;
    }
}