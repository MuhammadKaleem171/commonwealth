/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
export declare const CreateThreadReactionResponseAddressUserProfileBackgroundImage: core.serialization.ObjectSchema<
  serializers.CreateThreadReactionResponseAddressUserProfileBackgroundImage.Raw,
  CommonApi.CreateThreadReactionResponseAddressUserProfileBackgroundImage
>;
export declare namespace CreateThreadReactionResponseAddressUserProfileBackgroundImage {
  interface Raw {
    url?: string | null;
    imageBehavior?: string | null;
  }
}
