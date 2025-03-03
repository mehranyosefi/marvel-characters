import { type Slots } from 'vue';

type CharacterItemProps = {
    name: string,
    to: string,
    thumbnail: { path: string, extension: string },

}

export default function characterItem(props: CharacterItemProps, { slots }: { slots: Slots }) {
    const { name, to, thumbnail } = props;
    const SrcCalculate = `${thumbnail.path}.${thumbnail.extension}`
    return (
        <nuxt-link href={to} class="border border-transparent hover:border-gray-500 hover:shadow-[0px_0px_0px_.5px] shadow-gray-500 rounded p-3 transition-colors duration-300 group">
            <nuxt-img src={SrcCalculate} class="w-full h-96 rounded transition duration-500 group-hover:scale-104"></nuxt-img>
            <div class="mt-5">
                <span >{name}</span>
            </div>
        </nuxt-link>
    )
}
