import { useNavigation } from "@react-navigation/native";
import { Box } from "components/ui/box";
import { Button, ButtonIcon } from "components/ui/button";
import { ArrowLeft } from "lucide-react-native";


export function HeaderLogin() {
    const navigation = useNavigation()

    return (
        <Box className="h-11 justify-end" >
            <Button variant="outline" className="rounded-2xl p-3.5" onPress={() => navigation.goBack()}>
                <ButtonIcon as={ArrowLeft} />
            </Button>
        </Box>
    )
}