declare namespace ಠ_ಠ.clutz.root {
  class Z extends Z_Instance {
  }
  class Z_Instance {
    private noStructuralTyping_: any;
    useTransitive ( ) : ಠ_ಠ.clutz.transitive.Y | null ;
  }
}
declare namespace goog {
  function require(name: 'root.Z'): typeof ಠ_ಠ.clutz.root.Z;
}
declare module 'goog:root.Z' {
  import alias = ಠ_ಠ.clutz.root.Z;
  export default alias;
}
declare namespace ಠ_ಠ.clutz.transitive {
  class Y extends Y_Instance {
  }
  class Y_Instance {
    private noStructuralTyping_: any;
  }
}
