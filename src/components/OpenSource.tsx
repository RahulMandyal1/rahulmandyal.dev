import Link from "next/link";

type Package = {
  name: string;
  description: string;
  url: string;
};

type Contribution = {
  repo: string;
  description: string;
  url: string;
};

const packages: Package[] = [
  {
    name: "react-native-nitro-wallpaper",
    description: "Set device wallpapers programmatically on Android",
    url: "https://www.npmjs.com/package/react-native-nitro-wallpaper",
  },
  {
    name: "react-native-chat-typing-indicator",
    description: "Smooth, customizable typing indicator for chat apps",
    url: "https://www.npmjs.com/package/react-native-chat-typing-indicator",
  },
  {
    name: "react-native-dashed-view",
    description: "Customizable dashed border views for React Native",
    url: "https://www.npmjs.com/package/react-native-dashed-view",
  },
];

const contributions: Contribution[] = [];

export default function OpenSource() {
  if (packages.length === 0 && contributions.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <h2 className="mb-6 text-2xl font-bold">Open Source</h2>

      {packages.length > 0 && (
        <div className="mb-6">
          <h3 className="mb-3 text-lg font-semibold text-gray-700 dark:text-gray-300">
            NPM Packages
          </h3>
          <ul className="space-y-3">
            {packages.map((pkg) => (
              <li key={pkg.name}>
                <Link
                  href={pkg.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg p-3 transition hover:bg-stone-200/50 dark:hover:bg-zinc-800/50"
                >
                  <span className="font-medium text-gray-900 dark:text-gray-100">{pkg.name}</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{pkg.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {contributions.length > 0 && (
        <div>
          <h3 className="mb-3 text-lg font-semibold text-gray-700 dark:text-gray-300">
            Contributions
          </h3>
          <ul className="space-y-3">
            {contributions.map((contrib) => (
              <li key={contrib.url}>
                <Link
                  href={contrib.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg p-3 transition hover:bg-stone-200/50 dark:hover:bg-zinc-800/50"
                >
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {contrib.repo}
                  </span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{contrib.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
