import React, { useState, useEffect, useRef } from 'react';

const SearchInput = ({
  placeholder = 'Search...',
  value = '',
  onChange,
  onSearch,
  style = {},
  inputStyle = {},
  disabled = false,
  autoFocus = false,
}) => {
  const [internalValue, setInternalValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch?.(internalValue);
      inputRef.current?.blur();
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...style,
  };

  const baseLayerStyle = {
    position: 'absolute',
    overflow: 'hidden',
    borderRadius: '16px',
    filter: 'blur(3px)',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  const conicGradientStyle = (gradient, rotation = 0, size = 800) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 'max(100%, 400px)',
    height: 'max(100%, 400px)',
    backgroundImage: gradient,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 0',
    transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
    transition: 'all 2s',
  });

  const gradients = {
    glow: 'conic-gradient(#000, #402fb5 5%, #000 38%, #000 50%, #cf30aa 60%, #000 87%)',
    darkBorder: 'conic-gradient(rgba(0,0,0,0), #18116a, rgba(0,0,0,0) 10%, rgba(0,0,0,0) 50%, #6e1b60, rgba(0,0,0,0) 60%)',
    white: 'conic-gradient(rgba(0,0,0,0) 0%, #a099d8, rgba(0,0,0,0) 8%, rgba(0,0,0,0) 50%, #dfa2da, rgba(0,0,0,0) 58%)',
    border: 'conic-gradient(#1c191c, #402fb5 5%, #1c191c 14%, #1c191c 50%, #cf30aa 60%, #1c191c 64%)',
  };

  const getRotation = (layer, isHovered = false) => {
    if (isFocused) {
      return {
        glow: 420,
        darkBorder: 442,
        white: 443,
        border: 430,
      }[layer];
    }
    if (isHovered) {
      return {
        glow: -120,
        darkBorder: -98,
        white: -97,
        border: -110,
      }[layer];
    }
    return {
      glow: 60,
      darkBorder: 82,
      white: 83,
      border: 70,
    }[layer];
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={containerStyle} className="w-full max-w-full">
      <div
        className="w-full mx-auto"
        style={{
          position: 'relative',
          minHeight: inputStyle?.minHeight || '180px',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow Layer */}
        <div style={{
          ...baseLayerStyle,
          width: 'min(120%, 800px)',
          height: '150%',
          filter: 'blur(30px)',
          opacity: 0.4,
        }}>
          <div style={conicGradientStyle(gradients.glow, getRotation('glow', isHovered), 999)} />
        </div>

        {/* Dark Border Background Layers */}
        {[1, 2, 3].map((index) => (
          <div key={index} style={{
            ...baseLayerStyle,
            width: '99%',
            height: '92%',
          }}>
            <div style={conicGradientStyle(gradients.darkBorder, getRotation('darkBorder', isHovered))} />
          </div>
        ))}

        {/* White Layer */}
        <div style={{
          ...baseLayerStyle,
          width: '97%',
          height: '90%',
          borderRadius: '14px',
          filter: 'blur(2px)',
        }}>
          <div style={{
            ...conicGradientStyle(gradients.white, getRotation('white', isHovered)),
            filter: 'brightness(1.4)',
          }} />
        </div>

        {/* Border Layer */}
        <div style={{
          ...baseLayerStyle,
          width: '96%',
          height: '85%',
          borderRadius: '15px',
          filter: 'blur(0.5px)',
        }}>
          <div style={{
            ...conicGradientStyle(gradients.border, getRotation('border', isHovered)),
            filter: 'brightness(1.3)',
          }} />
        </div>

        {/* Input Container */}
        <div style={{
          position: 'absolute',
          width: '95%',
          height: '82%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#010201',
          borderRadius: '14px',
          overflow: 'hidden',
        }}>
          <textarea
            ref={inputRef}
            value={internalValue}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            disabled={disabled}
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white',
              padding: '16px 20px',
              fontSize: 'clamp(14px, 4vw, 20px)',
              outline: 'none',
              opacity: disabled ? 0.5 : 1,
              cursor: disabled ? 'not-allowed' : 'text',
              resize: 'none',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              overflowY: 'hidden',
              overflowX: 'hidden',
              wordWrap: 'break-word',
              whiteSpace: 'pre-wrap',
              ...inputStyle,
            }}
          />

          {/* Pink Mask */}
          <div style={{
            position: 'absolute',
            width: '40px',
            height: '24px',
            top: '12px',
            left: '8px',
            background: '#cf30aa',
            filter: 'blur(20px)',
            opacity: isHovered ? 0 : 0.8,
            pointerEvents: 'none',
            transition: 'opacity 2s',
          }} />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;