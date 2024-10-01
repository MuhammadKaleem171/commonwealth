/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { UpdateCommentResponseAddressUserProfileBackgroundImage } from "./UpdateCommentResponseAddressUserProfileBackgroundImage";
export declare const UpdateCommentResponseAddressUserProfile: core.serialization.ObjectSchema<serializers.UpdateCommentResponseAddressUserProfile.Raw, CommonApi.UpdateCommentResponseAddressUserProfile>;
export declare namespace UpdateCommentResponseAddressUserProfile {
    interface Raw {
        name?: string | null;
        email?: string | null;
        website?: string | null;
        bio?: string | null;
        avatar_url?: string | null;
        slug?: string | null;
        socials?: string[] | null;
        background_image?: UpdateCommentResponseAddressUserProfileBackgroundImage.Raw | null;
    }
}