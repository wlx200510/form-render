import React from 'react';
import ColorPicker from 'rc-color-picker';
import Color from 'color';
import { Input } from 'antd';
import 'rc-color-picker/assets/index.css';

export default function color(p) {
  const { format } = p.schema;
  const { helperContainer } = p;
  const defaultColor = '#ffffff';
  const onPickerChange = e => {
    if (p.disabled || p.readOnly) return;
    let { color, alpha } = e;
    if (alpha !== 100) {
      color = Color(color)
        .alpha(alpha / 100)
        .string();
    }
    p.onChange(p.name, color);
  };
  const onInputChange = e => {
    p.onChange(p.name, e.target.value);
  };

  return (
    <div className="fr-color-picker">
      {
        <ColorPicker
          type={format}
          animation="slide-up"
          color={p.value || defaultColor}
          onClose={onPickerChange}
          gerCalendarContainer={helperContainer}
        />
      }
      {p.readOnly ? (
        <span>{p.value || defaultColor}</span>
      ) : (
        <Input
          style={{ width: '100%' }}
          placeholder={defaultColor}
          disabled={p.disabled}
          value={p.value}
          onChange={onInputChange}
        />
      )}
    </div>
  );
}
