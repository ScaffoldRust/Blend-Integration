'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Clipboard, Check } from 'lucide-react';
import copy from 'copy-to-clipboard';
import clsx from 'clsx';

const codeExamples = {
  rust: `use blend_sdk::{BlendClient, Pool, PoolConfig};
use tokio;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = BlendClient::new("your-api-key").await?;

    let pool_config = PoolConfig {
        name: "My Lending Pool".to_string(),
        max_loan_amount: 1000000,
        interest_rate: 0.08,
        collateral_ratio: 0.8,
    };

    let pool = client.create_pool(pool_config).await?;
    println!("Pool created: {}", pool.id);

    // Start real-time monitoring
    client.monitor_pool(&pool.id, |event| {
        println!("Pool event: {:?}", event);
    }).await?;

    Ok(())
}`,
  javascript: `import { BlendClient } from 'blend-sdk';

(async () => {
    const client = new BlendClient('your-api-key');

    const poolConfig = {
        name: 'My Lending Pool',
        maxLoanAmount: 1000000,
        interestRate: 0.08,
        collateralRatio: 0.8,
    };

    const pool = await client.createPool(poolConfig);
    console.log('Pool created:', pool.id);

    client.monitorPool(pool.id, (event) => {
        console.log('Pool event:', event);
    });
})();`,
  python: `from blend_sdk import BlendClient

client = BlendClient("your-api-key")

pool_config = {
    "name": "My Lending Pool",
    "max_loan_amount": 1000000,
    "interest_rate": 0.08,
    "collateral_ratio": 0.8,
}

pool = client.create_pool(pool_config)
print("Pool created:", pool["id"])

def handle_event(event):
    print("Pool event:", event)

client.monitor_pool(pool["id"], handle_event)`,
};

const languages = ['rust', 'javascript', 'python'] as const;

export default function QuickIntegrationExamples() {
  const [selectedLang, setSelectedLang] = useState<'rust' | 'javascript' | 'python'>('rust');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copy(codeExamples[selectedLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="">
      <h1 
        className="text-black text-center mb-3"
        style={{
          fontFamily: 'Geist, system-ui, -apple-system, sans-serif',
          fontWeight: 700,
          fontSize: '36px',
          lineHeight: '40px',
          letterSpacing: '0%'
        }}
      >
        Quick Integration Examples
      </h1>
      
      <p className="text-[20px] text-gray-600 leading-relaxed text-center mb-12">
        Copy, paste, and customize these examples for your project
      </p>

      <div className="flex w-full mb-8 bg-gray-200 p-1 rounded-lg">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => setSelectedLang(lang)}
            className={clsx(
              'flex-1 pb-3 text-sm font-medium transition-all duration-200 text-center flex items-center justify-center rounded-lg p-2',
              selectedLang === lang
                ? 'bg-white text-black p-2'
                : 'bg-gray-200 text-gray-700'
            )}
          >
            {lang.charAt(0).toUpperCase() + lang.slice(1)}
          </button>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className='text-left'>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Blend Pool Integration
              </h3>
              <p className="text-[14px] text-gray-600 leading-relaxed">
                Initialize and manage lending pools with Blend API
              </p>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 transition-colors"
            >
              {copied ? <Check className="h-4 w-4 text-green-600" /> : <Clipboard className="h-4 w-4" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="bg-[#0F172A] overflow-x-auto">
            <SyntaxHighlighter
              language={selectedLang}
              style={oneDark}
              customStyle={{ 
                padding: '24px',
                margin: 0,
                fontSize: '14px',
              }}
            >
              {codeExamples[selectedLang]}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
}
