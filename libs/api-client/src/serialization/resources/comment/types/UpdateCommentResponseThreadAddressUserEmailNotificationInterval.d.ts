/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
export declare const UpdateCommentResponseThreadAddressUserEmailNotificationInterval: core.serialization.Schema<
  serializers.UpdateCommentResponseThreadAddressUserEmailNotificationInterval.Raw,
  CommonApi.UpdateCommentResponseThreadAddressUserEmailNotificationInterval
>;
export declare namespace UpdateCommentResponseThreadAddressUserEmailNotificationInterval {
  type Raw = 'weekly' | 'never';
}
