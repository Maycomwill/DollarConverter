import { useState } from "react";
import { useCurrency } from "./hooks/useCurrency";
import { Rates } from "./interfaces/Currencies";

function App() {
  const { data } = useCurrency();
  const object = data?.data.rates;
  const results = [];

  if (object instanceof Object) {
    const rates = object as Rates;
    for (const key in rates) {
      if (key in rates) {
        results.push([key, rates[key]]);
      }
    }
  }

  const [inputValue, setInputValue] = useState<number>(0);
  const [outputValue, setOutputValue] = useState<number>(0);
  const [currencyConverter, setCurrencyConverter] = useState<number>();

  function handleConvert(e: React.FormEvent<HTMLFormElement>, converterFactor: number | undefined) {
    e.preventDefault();
    console.log("factor: ", converterFactor);
    console.log("input: ", inputValue);

    const result = Number((inputValue * Number(converterFactor)).toFixed(3));

    setOutputValue(result);
  }

  console.log("Input: ", inputValue);
  // console.log("Output: ", outputValue);
  // console.log("Currency: ", currencyConverter);
  return (
    <>
      <div className="w-full h-screen flex flex-col bg-svg bg-center bg-cover bg-[#fafafa] dark:bg-[#121214] items-center justify-start p-4 antialiased leading-relaxed text-gray-900 dark:text-gray-100">
        <div className="font-bold text-2xl mt-12 flex gap-2 cursor-default">
          <span className="relative font-ubuntu bg-gradient-to-r from-green-500 to-green-600 text-transparent bg-clip-text">
            Dollar
            <div className="w-full h-1 bg-gradient-to-r from-green-500 to-green-600 bottom-0 absolute rounded-md animate-left-appears"></div>
          </span>
          <h1>Exchange</h1>
        </div>
        <section className="mt-12 w-full flex flex-col justify-center items-center p-2">
          <form
            className="flex flex-col gap-8 items-center"
            onSubmit={(e) => {
              handleConvert(e, currencyConverter);
            }}
          >
            <select
              className="w-[50%] md:max-w-[20%] bg-green-50 text-gray-900 outline-none py-2 px-1 rounded-md"
              name="currencies"
              id="currenySelect"
              placeholder="Select the currency"
              title="currenySelect"
              value={currencyConverter}
              onChange={(e) => setCurrencyConverter(Number(e.target.value))}
            >
              <optgroup title="World's Currencies" className="rounded-md bg-green-50">
                {results.map((currency) => {
                  return (
                    <option
                      value={currency[1]}
                      key={`${currency[0]}-${currency[1]}`}
                    >
                      {currency[0]}
                    </option>
                  );
                })}
              </optgroup>
            </select>
            <div className="flex flex-col md:flex-row w-full md:gap-16">
              <div className="flex flex-col md:flex-row gap-2 items-center justify-between ">
                <label htmlFor="entry" className="font-semibold">
                  Entry
                </label>
                <input
                  step={0.1}
                  type="number"
                  id="entry"
                  value={inputValue}
                  onChange={(e) => setInputValue(Number(e.target.value))}
                  placeholder="Ex: 12.4"
                  className="p-2 rounded-md bg-green-50 text-gray-800 border border-[#00000000] focus-within:outline-none focus-within:border focus-within:border-green-500 h-11 w-48"
                />
              </div>
              <div className="w-full text-center">
                <span className=" text-5xl font-bold antialiased bg-gradient-to-r from-green-500 to-green-600 text-transparent bg-clip-text">
                  =
                </span>
              </div>
              <div className="flex flex-col md:flex-row gap-2 items-center justify-between ">
                <label className="font-semibold">Output</label>
                <div className="p-2 rounded-md bg-green-50 text-gray-800 border border-[#00000000] focus-within:outline-none focus-within:border focus-within:border-fuchsia-300 w-48 h-11">
                  <span>{outputValue == 0 ? null : outputValue}</span>
                </div>
              </div>
            </div>
            <div>
              <button
                className="bg-gray-300 text-gray-900 font-bold hover:bg-green-400 transition-colors duration-150 drop-shadow-lg py-4 px-8 rounded-lg"
                type="submit"
              >
                Convert
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export default App;
