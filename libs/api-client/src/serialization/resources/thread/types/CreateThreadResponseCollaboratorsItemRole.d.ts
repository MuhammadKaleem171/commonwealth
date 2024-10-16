/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
export declare const CreateThreadResponseCollaboratorsItemRole: core.serialization.Schema<
  serializers.CreateThreadResponseCollaboratorsItemRole.Raw,
  CommonApi.CreateThreadResponseCollaboratorsItemRole
>;
export declare namespace CreateThreadResponseCollaboratorsItemRole {
  type Raw = 'admin' | 'moderator' | 'member';
}
