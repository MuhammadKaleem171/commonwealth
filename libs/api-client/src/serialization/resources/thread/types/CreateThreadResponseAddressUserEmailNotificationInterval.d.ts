/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
export declare const CreateThreadResponseAddressUserEmailNotificationInterval: core.serialization.Schema<
  serializers.CreateThreadResponseAddressUserEmailNotificationInterval.Raw,
  CommonApi.CreateThreadResponseAddressUserEmailNotificationInterval
>;
export declare namespace CreateThreadResponseAddressUserEmailNotificationInterval {
  type Raw = 'weekly' | 'never';
}
