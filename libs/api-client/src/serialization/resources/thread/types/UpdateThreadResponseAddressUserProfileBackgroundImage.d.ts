/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
export declare const UpdateThreadResponseAddressUserProfileBackgroundImage: core.serialization.ObjectSchema<
  serializers.UpdateThreadResponseAddressUserProfileBackgroundImage.Raw,
  CommonApi.UpdateThreadResponseAddressUserProfileBackgroundImage
>;
export declare namespace UpdateThreadResponseAddressUserProfileBackgroundImage {
  interface Raw {
    url?: string | null;
    imageBehavior?: string | null;
  }
}
