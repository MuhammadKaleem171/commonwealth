/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
export declare const CreateCommentReactionResponseAddressRole: core.serialization.Schema<serializers.CreateCommentReactionResponseAddressRole.Raw, CommonApi.CreateCommentReactionResponseAddressRole>;
export declare namespace CreateCommentReactionResponseAddressRole {
    type Raw = "admin" | "moderator" | "member";
}