/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
export declare const CreateThreadResponseCollaboratorsItemUserEmailNotificationInterval: core.serialization.Schema<
  serializers.CreateThreadResponseCollaboratorsItemUserEmailNotificationInterval.Raw,
  CommonApi.CreateThreadResponseCollaboratorsItemUserEmailNotificationInterval
>;
export declare namespace CreateThreadResponseCollaboratorsItemUserEmailNotificationInterval {
  type Raw = 'weekly' | 'never';
}
