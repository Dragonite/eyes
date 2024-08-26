import React from 'react';
import { Popover } from "flowbite-react";

const input = [
    [null, null, null, 25, 25, 23, 23, null, null, null],
    [null, null, 26, 26, 26, 26, 28, 27, null, null],
    [null, 28, 29, 29, 28, 28, 28, 29, 28, null],
    [28, 29, 30, 30, 30, 30, 29, 28, 28, 26],
    [27, 27, 30, 32, 32, 32, 31, 27, 28, 29],
    [28, 22, 31, 32, 32, 32, 31, 20, 28, 29],
    [29, 30, 31, 31, 31, 31, 30, 29, 29, 27],
    [null, 30, 30, 30, 30, 30, 30, 31, 30, null],
    [null, null, 29, 29, 29, 29, 30, 29, null, null],
    [null, null, null, 28, 29, 28, 27, null, null, null]
];

function interpolateColorToHex(value: number | null, min: number = 20, max: number = 32): string {
    if (!value) return 'none';
    // Clamp the input value between min and max
    const clampedValue = Math.min(max, Math.max(min, value));
  
    // Normalize the value to a range of 0 to 1
    const normalizedValue = (clampedValue - min) / (max - min);
  
    // Red and green RGB values
    const red = { r: 249, g: 152, b: 116 };
    const green = { r: 99, g: 190, b: 123 };
  
    // Interpolate each color component based on the normalized value
    const r = Math.round(red.r + (green.r - red.r) * normalizedValue);
    const g = Math.round(red.g + (green.g - red.g) * normalizedValue);
    const b = Math.round(red.b + (green.b - red.b) * normalizedValue);
  
    // Convert RGB to hex
    const toHex = (component: number) => component.toString(16).padStart(2, '0');
  
    const hexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  
    return hexColor;
}

const Grid = () => {
  return (
    <div className='w-full flex justify-center mb-10'>
        <div className="grid grid-cols-10 w-80 items-stretch">
        {input.map((row, rIndex) => {
            return (
                <div className="flex" key={rIndex}>
                {row.map((value, cIndex) => {
                    return (
                        <Popover
                            aria-labelledby="default-popover"
                            key={`${rIndex},${cIndex}`}
                            content={
                            <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
                                <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
                                <h3 id="default-popover" className="font-semibold text-gray-900 dark:text-white">Cell data for {rIndex},{cIndex}</h3>
                                </div>
                                <div className="px-3 py-2">
                                <p>This eye cell has a score of {value}</p>
                                </div>
                            </div>
                            }
                        >
                            <button className={`w-8 h-8`} style={{backgroundColor: interpolateColorToHex(value)}} type="button">{value}</button>
                        </Popover>
                    )
                })}
                </div>
            );
        })}
        </div>
    </div>
  );
}

export default Grid;
