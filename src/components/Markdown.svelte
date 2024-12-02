<div
        class={`
      px-5 py-3 text-muted
      [&_h1]:text-3xl [&_h1]:mt-4 [&_h1]:font-extrabold [&_h1]:text-foreground
      [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:tracking-wide 
      [&_h3]:text-lg [&_h3]:font-semibold 
      [&_h4]:text-md [&_h4]:font-semibold 
      [&_h5]:text-sm [&_h5]:font-bold 
      [&_p]:text-sm  [&_p]:text-justify  [&_p]:my-2
      [&_ul]:p-2 [&_ul]:font-light 
      [&_ol]:p-2 [&_ol]:font-light 
      [&_li]:list-disc [&_li]:px-2 [&_li]:py-[2px] [&_li]:ml-4  [&_li]:text-muted
      [&_table]:font-light 
      [&_hr]:mb-3
      [&_a]:text-muted
      [&_pre]:p-4  [&_pre]:scroll-none
      [&_iframe]:my-5     [&_iframe]:aspect-video
    `}
      >
      <slot />
      </div>