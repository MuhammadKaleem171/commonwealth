/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
export declare const CreateCommentResponseThreadReactionsItemAddressUserProfileBackgroundImage: core.serialization.ObjectSchema<
  serializers.CreateCommentResponseThreadReactionsItemAddressUserProfileBackgroundImage.Raw,
  CommonApi.CreateCommentResponseThreadReactionsItemAddressUserProfileBackgroundImage
>;
export declare namespace CreateCommentResponseThreadReactionsItemAddressUserProfileBackgroundImage {
  interface Raw {
    url?: string | null;
    imageBehavior?: string | null;
  }
}
