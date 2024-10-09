/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';

export declare const CreateThreadResponseAddressUserProfileBackgroundImage: core.serialization.ObjectSchema<
  serializers.CreateThreadResponseAddressUserProfileBackgroundImage.Raw,
  CommonApi.CreateThreadResponseAddressUserProfileBackgroundImage
>;
export declare namespace CreateThreadResponseAddressUserProfileBackgroundImage {
  interface Raw {
    url?: string | null;
    imageBehavior?: string | null;
  }
}
