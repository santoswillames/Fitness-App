import { useNavigation } from "@react-navigation/native";
import { Box } from "components/ui/box";
import { Button, ButtonIcon } from "components/ui/button";
import { ArrowLeft } from "lucide-react-native";


export function HeaderLogin() {
    const navigation = useNavigation()

    return (
        <Box className="pt-14 pb-9 justify-end">
            <Button
                variant="outline"
                className="rounded-2xl p-3.5 w-[55px] h-[44px] self-start border-[#D9D9D9]"
                onPress={() => navigation.goBack()}
            >
                <ButtonIcon as={ArrowLeft} color="white"/>
            </Button>
        </Box>

    )
}