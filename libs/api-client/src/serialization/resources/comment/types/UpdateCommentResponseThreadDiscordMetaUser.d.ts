/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';

export declare const UpdateCommentResponseThreadDiscordMetaUser: core.serialization.ObjectSchema<
  serializers.UpdateCommentResponseThreadDiscordMetaUser.Raw,
  CommonApi.UpdateCommentResponseThreadDiscordMetaUser
>;
export declare namespace UpdateCommentResponseThreadDiscordMetaUser {
  interface Raw {
    id: string;
    username: string;
  }
}
