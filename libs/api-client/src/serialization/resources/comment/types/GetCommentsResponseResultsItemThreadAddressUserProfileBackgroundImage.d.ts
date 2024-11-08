/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
export declare const GetCommentsResponseResultsItemThreadAddressUserProfileBackgroundImage: core.serialization.ObjectSchema<
  serializers.GetCommentsResponseResultsItemThreadAddressUserProfileBackgroundImage.Raw,
  CommonApi.GetCommentsResponseResultsItemThreadAddressUserProfileBackgroundImage
>;
export declare namespace GetCommentsResponseResultsItemThreadAddressUserProfileBackgroundImage {
  interface Raw {
    url?: string | null;
    imageBehavior?: string | null;
  }
}
