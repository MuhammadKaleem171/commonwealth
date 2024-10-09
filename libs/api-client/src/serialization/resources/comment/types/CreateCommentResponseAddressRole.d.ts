/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';

export declare const CreateCommentResponseAddressRole: core.serialization.Schema<
  serializers.CreateCommentResponseAddressRole.Raw,
  CommonApi.CreateCommentResponseAddressRole
>;
export declare namespace CreateCommentResponseAddressRole {
  type Raw = 'admin' | 'moderator' | 'member';
}
