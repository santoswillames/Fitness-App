import React, { useRef, useState } from "react";
import { Input, InputField } from "components/ui/input";
import { HStack } from "components/ui/hstack";
import { TextInput } from "react-native";

type OtpInputProps = {
  length?: number;
  onComplete?: (code: string) => void;
};

export function OtpInput({ length = 4, onComplete }: OtpInputProps) {
  const [values, setValues] = useState<string[]>(Array(length).fill(""));
  const inputsRef = useRef<(TextInput | null)[]>([]);

  const handleChange = (text: string, index: number) => {
    const newValues = [...values];
    newValues[index] = text;
    setValues(newValues);

    if (text && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    if (newValues.every((v) => v !== "")) {
      onComplete?.(newValues.join(""));
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && values[index] === "" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <HStack space="2xl" className="justify-center">
      {Array.from({ length }).map((_, i) => {
        const hasValue = values[i]?.length > 0;

        return (
          <Input
            key={i}
            variant="rounded"
            className={`w-[70px] h-[60px] rounded-2xl bg-[#494358] border-0
              data-[focus=true]:border data-[focus=true]:border-white
              ${hasValue ? "border border-white" : ""}
            `}
          >
            <InputField
              ref={(ref) => {
                inputsRef.current[i] = ref as unknown as TextInput;
              }}
              keyboardType="number-pad"
              maxLength={1}
              value={values[i]}
              onChangeText={(text) => handleChange(text, i)}
              onKeyPress={(e) => handleKeyPress(e, i)}
              className="text-center text-white font-montserrat-semibold text-xl"
            />
          </Input>
        );
      })}
    </HStack>
  );
}
