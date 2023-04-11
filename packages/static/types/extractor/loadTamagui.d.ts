import { ResolvedOptions } from '@tamagui/cli/types/types';
import type { TamaguiProjectInfo } from '@tamagui/web';
import { TamaguiOptions } from '../types.js';
type Props = {
    components: string[];
    config?: string;
    forceExports?: boolean;
};
export declare function loadTamagui(props: Props): Promise<TamaguiProjectInfo>;
export declare function resolveWebOrNativeSpecificEntry(entry: string): string;
export declare function loadTamaguiSync(props: Props): TamaguiProjectInfo;
export declare function generateTamaguiConfig(options: ResolvedOptions): Promise<void>;
export declare function watchTamaguiConfig(tamaguiOptions: TamaguiOptions): Promise<void>;
export {};
//# sourceMappingURL=loadTamagui.d.ts.map