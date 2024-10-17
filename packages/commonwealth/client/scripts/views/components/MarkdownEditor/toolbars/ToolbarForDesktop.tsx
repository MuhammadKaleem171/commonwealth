import {
  ChangeCodeMirrorLanguage,
  ConditionalContents,
  IS_BOLD,
  IS_ITALIC,
  IS_STRIKETHROUGH,
  IS_SUBSCRIPT,
  IS_SUPERSCRIPT,
  IS_UNDERLINE,
  Separator,
} from 'commonwealth-mdxeditor';
import React from 'react';
import { CWCreateLinkButton } from 'views/components/MarkdownEditor/toolbars/CWCreateLinkButton';
import { CWFormatButton } from 'views/components/MarkdownEditor/toolbars/CWFormatButton';
import { CWHeadingButton } from 'views/components/MarkdownEditor/toolbars/CWHeadingButton';
import { CWInsertCodeBlockButton } from 'views/components/MarkdownEditor/toolbars/CWInsertCodeBlockButton';
import { CWListButton } from 'views/components/MarkdownEditor/toolbars/CWListButton';
import { CWTableButton } from 'views/components/MarkdownEditor/toolbars/CWTableButton';
import { ImageButton } from 'views/components/MarkdownEditor/toolbars/ImageButton';
import './ToolbarForDesktop.scss';

type ToolbarForDesktopProps = Readonly<{
  onImage?: (file: File) => void;
  focus: () => void;
}>;

export const ToolbarForDesktop = (props: ToolbarForDesktopProps) => {
  const { onImage } = props;

  return (
    <>
      <div className="ToolbarForDesktop">
        <ConditionalContents
          options={[
            {
              when: (editor) => editor?.editorType === 'codeblock',
              contents: () => <ChangeCodeMirrorLanguage />,
            },
            {
              fallback: () => (
                <>
                  <div className="button-container">
                    <CWHeadingButton blockType="h1" />
                    <CWHeadingButton blockType="h2" />
                    <CWHeadingButton blockType="h3" />
                  </div>

                  <Separator />
                  <CWFormatButton format={IS_BOLD} formatName="bold" />
                  <CWFormatButton
                    format={IS_UNDERLINE}
                    formatName="underline"
                  />
                  <CWFormatButton format={IS_ITALIC} formatName="italic" />
                  <Separator />

                  <CWFormatButton
                    format={IS_STRIKETHROUGH}
                    formatName="strikethrough"
                  />

                  <CWFormatButton
                    format={IS_SUPERSCRIPT}
                    formatName="superscript"
                  />

                  <CWFormatButton
                    format={IS_SUBSCRIPT}
                    formatName="subscript"
                  />

                  <Separator />

                  <CWListButton listType="bullet" />
                  <CWListButton listType="number" />
                  <CWListButton listType="check" />

                  <Separator />

                  <div className="button-container">
                    <CWCreateLinkButton />
                    <ImageButton onImage={onImage} />
                    <CWInsertCodeBlockButton />
                    <CWHeadingButton blockType="quote" />
                    <CWTableButton />
                  </div>
                </>
              ),
            },
          ]}
        />
      </div>
    </>
  );
};
