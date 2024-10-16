/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
import { UpdateCommentResponseThreadLinksItemSource } from './UpdateCommentResponseThreadLinksItemSource';
export declare const UpdateCommentResponseThreadLinksItem: core.serialization.ObjectSchema<
  serializers.UpdateCommentResponseThreadLinksItem.Raw,
  CommonApi.UpdateCommentResponseThreadLinksItem
>;
export declare namespace UpdateCommentResponseThreadLinksItem {
  interface Raw {
    source: UpdateCommentResponseThreadLinksItemSource.Raw;
    identifier: string;
    title?: string | null;
  }
}
