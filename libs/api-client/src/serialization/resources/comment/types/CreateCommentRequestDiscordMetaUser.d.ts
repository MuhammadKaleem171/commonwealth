/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
export declare const CreateCommentRequestDiscordMetaUser: core.serialization.ObjectSchema<serializers.CreateCommentRequestDiscordMetaUser.Raw, CommonApi.CreateCommentRequestDiscordMetaUser>;
export declare namespace CreateCommentRequestDiscordMetaUser {
    interface Raw {
        id: string;
        username: string;
    }
}