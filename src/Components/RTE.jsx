import React from 'react';
import { Controller } from 'react-hook-form';
import { Editor } from '@tinymce/tinymce-react';

export default function RTE({ name, control, label, defaultValue = "" }) {
  const handleEditorChange = (content, editor) => {
    editor.getBody().setAttribute('dir', 'ltr'); // Enforce LTR direction on content change
    onChange(content);
  };

  return (
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => {
          return (
            <Editor
              apiKey='ba5uegymspq869k9ppqqmy7iyrv0x343usoozmiybsy4folu'
              initialValue={defaultValue}
              init={{
                height: 500,
                menubar: true,
                plugins: [
                  "image",
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                  "anchor",
                ],
                toolbar:
                  "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; direction: ltr; }",
                directionality: 'ltr',
                setup: (editor) => {
                  editor.on('init', () => {
                    editor.getBody().setAttribute('dir', 'ltr');
                  });
                  editor.on('change', (e) => {
                    editor.getBody().setAttribute('dir', 'ltr');
                  });
                }
              }}
              onEditorChange={handleEditorChange}
            />
          );
        }}
      />
    </div>
  );
}
