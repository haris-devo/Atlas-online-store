import React from 'react';

export function MetropolisFontDemo() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-4xl font-metropolis-black text-center mb-8">
        Metropolis Font Demo
      </h1>

      <div className="space-y-6">
        {/* Thin Weight */}
        <div className="p-4 border rounded-lg">
          <h2 className="text-2xl font-metropolis-semibold mb-2">
            Thin Weight (100)
          </h2>
          <p className="font-metropolis-thin text-lg">
            This is Metropolis Thin - ultra-light weight for elegant headings.
          </p>
        </div>

        {/* Extra Light Weight */}
        <div className="p-4 border rounded-lg">
          <h2 className="text-2xl font-metropolis-semibold mb-2">
            Extra Light Weight (200)
          </h2>
          <p className="font-metropolis-extralight text-lg">
            This is Metropolis Extra Light - perfect for subtle text elements.
          </p>
        </div>

        {/* Light Weight */}
        <div className="p-4 border rounded-lg">
          <h2 className="text-2xl font-metropolis-semibold mb-2">
            Light Weight (300)
          </h2>
          <p className="font-metropolis-light text-lg">
            This is Metropolis Light - great for secondary text and captions.
          </p>
        </div>

        {/* Regular Weight */}
        <div className="p-4 border rounded-lg">
          <h2 className="text-2xl font-metropolis-semibold mb-2">
            Regular Weight (400)
          </h2>
          <p className="font-metropolis text-lg">
            This is Metropolis Regular - perfect for body text and general
            content.
          </p>
        </div>

        {/* Medium Weight */}
        <div className="p-4 border rounded-lg">
          <h2 className="text-2xl font-metropolis-semibold mb-2">
            Medium Weight (500)
          </h2>
          <p className="font-metropolis-medium text-lg">
            This is Metropolis Medium - great for emphasis and subheadings.
          </p>
        </div>

        {/* SemiBold Weight */}
        <div className="p-4 border rounded-lg">
          <h2 className="text-2xl font-metropolis-semibold mb-2">
            SemiBold Weight (600)
          </h2>
          <p className="font-metropolis-semibold text-lg">
            This is Metropolis SemiBold - ideal for headings and important text.
          </p>
        </div>

        {/* Bold Weight */}
        <div className="p-4 border rounded-lg">
          <h2 className="text-2xl font-metropolis-semibold mb-2">
            Bold Weight (700)
          </h2>
          <p className="font-metropolis-bold text-lg">
            This is Metropolis Bold - perfect for strong emphasis and titles.
          </p>
        </div>

        {/* Extra Bold Weight */}
        <div className="p-4 border rounded-lg">
          <h2 className="text-2xl font-metropolis-semibold mb-2">
            Extra Bold Weight (800)
          </h2>
          <p className="font-metropolis-extrabold text-lg">
            This is Metropolis Extra Bold - excellent for impactful headlines.
          </p>
        </div>

        {/* Black Weight */}
        <div className="p-4 border rounded-lg">
          <h2 className="text-2xl font-metropolis-semibold mb-2">
            Black Weight (900)
          </h2>
          <p className="font-metropolis-black text-lg">
            This is Metropolis Black - the heaviest weight for maximum impact.
          </p>
        </div>

        {/* Italic Examples */}
        <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
          <h2 className="text-2xl font-metropolis-semibold mb-4">
            Italic Variants
          </h2>
          <div className="space-y-2">
            <p className="font-metropolis-italic text-lg">
              Regular Italic - elegant slanted text
            </p>
            <p className="font-metropolis-medium-italic text-lg">
              Medium Italic - emphasized slanted text
            </p>
            <p className="font-metropolis-bold-italic text-lg">
              Bold Italic - strong slanted text
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h3 className="text-xl font-metropolis-semibold mb-2">
          Available Font Classes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 font-metropolis text-sm">
          <div>
            <h4 className="font-metropolis-medium mb-1">Normal Weights:</h4>
            <ul className="space-y-1 text-xs">
              <li>
                •
                {' '}
                <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
                  font-metropolis-thin
                </code>
                {' '}
                (100)
              </li>
              <li>
                •
                {' '}
                <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
                  font-metropolis-extralight
                </code>
                {' '}
                (200)
              </li>
              <li>
                •
                {' '}
                <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
                  font-metropolis-light
                </code>
                {' '}
                (300)
              </li>
              <li>
                •
                {' '}
                <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
                  font-metropolis
                </code>
                {' '}
                (400)
              </li>
              <li>
                •
                {' '}
                <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
                  font-metropolis-medium
                </code>
                {' '}
                (500)
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-metropolis-medium mb-1">Heavy Weights:</h4>
            <ul className="space-y-1 text-xs">
              <li>
                •
                {' '}
                <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
                  font-metropolis-semibold
                </code>
                {' '}
                (600)
              </li>
              <li>
                •
                {' '}
                <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
                  font-metropolis-bold
                </code>
                {' '}
                (700)
              </li>
              <li>
                •
                {' '}
                <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
                  font-metropolis-extrabold
                </code>
                {' '}
                (800)
              </li>
              <li>
                •
                {' '}
                <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
                  font-metropolis-black
                </code>
                {' '}
                (900)
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-3">
          <h4 className="font-metropolis-medium mb-1">Italic Variants:</h4>
          <p className="text-xs">
            Add
            {' '}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
              -italic
            </code>
            {' '}
            to any weight class (e.g.,
            {' '}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
              font-metropolis-bold-italic
            </code>
            )
          </p>
        </div>
      </div>
    </div>
  );
}
