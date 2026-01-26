import css from "../../pages/SuspensionPage/SuspensionPage.module.css";
export default function Brands() {
  return (
    <div className={css.brands}>
      {/* FOX */}

      <div className={css.brand}>
        <img src="/images/services/suspension/fox.png" alt="FOX" />
        <div className={css.brandInfo}>
          <h3>FOX Suspension: Race-Bred Performance for Off-Road and Beyond</h3>

          <p>
            FOX (often stylized as Fox Racing Shox) is a California-based
            powerhouse in high-performance suspension, originally rooted in
            motocross and off-road racing since the 1970s. While best known for
            dominating desert racing, Baja, and truck/Jeep builds, FOX has
            expanded into street-performance and coilover systems that deliver
            plush yet controlled damping for mixed use.
          </p>

          <p>
            FOX’s signature tech includes monotube designs with internal
            floating pistons (IFP) for fade-free performance, external
            reservoirs for increased oil capacity and heat management, and
            adjustable damping (like Dual Speed Compression or DSC in higher-end
            lines). Popular series include:
          </p>

          <ul className={css.brandList}>
            <li>
              <strong>2.0 Performance Series</strong> — Entry-level
              race-inspired shocks/coilovers with linear valving for consistent
              damping. Enthusiasts praise them for soaking up big hits off-road
              while staying composed on pavement—often described as softer and
              more compliant over bumps than Bilstein equivalents.
            </li>
            <li>
              <strong>2.5 / Factory Series</strong> — Premium upgrades with
              remote reservoirs, rebuildable internals, and advanced valving for
              serious off-road or lifted trucks (e.g., Ford F-150, Bronco, Jeep
              JL). These offer superior travel, tunability, and durability under
              abuse. Compared to Bilstein (firmer, digressive valving for
              excellent on-road control and towing), FOX tends to feel more
              compliant and forgiving off-road, with better bump
              absorption—though it can allow slightly more body roll on-street.
              Versus KW (highly adjustable street/track coilovers), FOX leans
              heavier toward rugged, race-derived performance rather than
              ultra-precise damping tweaks for pavement.
            </li>
          </ul>

          <p>
            FOX shines for trucks, SUVs, and vehicles seeing dirt, trails, or
            heavy loads—offering rebuildability and long-term value despite the
            premium price. Many owners call it “worth the bump” over Bilstein
            for pure comfort on rough terrain.
          </p>

          <p>
            If you’re eyeing FOX as a Bilstein alternative, it’s a strong pick
            for off-road-focused builds. What’s your vehicle and main driving
            style!
          </p>

          <p>
            For off-road enthusiasts, Fox Racing Shox offer rugged, adjustable
            systems that handle extreme terrains with ease.
          </p>
        </div>
      </div>

      {/* BILSTEIN */}
      <div className={css.brand}>
        <img src="/images/services/suspension/bilstein.png" alt="Bilstein" />
        <div className={css.brandInfo}>
          <h3>Bilstein: Precision German Engineering</h3>
          <p>
            Bilstein is a benchmark in the aftermarket suspension world, known
            for its monotube design, excellent heat dissipation, and consistent
            damping performance.
          </p>
          <p>
            Ideal for daily drivers and enthusiasts alike, Bilstein shocks
            balance comfort and sporty handling while delivering long-term
            reliability.
          </p>
        </div>
      </div>
      {/* ÖHLINS */}
      <div className={css.brand}>
        <img src="/images/services/suspension/ohlins.png" alt="Öhlins" />
        <div className={css.brandInfo}>
          <h3>Öhlins: Premium Street & Track Performance</h3>

          <p>
            Öhlins is a premium suspension brand known for exceptional damping
            and superior ride control. Often considered the “best” for
            street/track setups.
          </p>

          <ul className={css.brandList}>
            <li>
              <strong>Road & Track Series</strong> — Excellent compliance and
              control.
            </li>
            <li>
              <strong>DFV (Dual Flow Valve)</strong> — Smooth, stable, and
              highly responsive damping.
            </li>
          </ul>

          <p>
            Öhlins is pricier, but it offers the most refined ride and precise
            handling for performance enthusiasts.
          </p>
        </div>
      </div>

      {/* KW */}
      <div className={css.brand}>
        <img src="/images/services/suspension/kw.png" alt="KW" />
        <div className={css.brandInfo}>
          <h3>KW Suspensions: Premium Adjustable Coilovers</h3>
          <p>
            KW Suspensions is a leading German manufacturer specializing in
            high-performance coilover systems and advanced suspension
            technology.
          </p>
          <p>
            Their adjustable setups provide the perfect balance between everyday
            comfort and track-ready precision.
          </p>
        </div>
      </div>
      {/* OME */}
      <div className={css.brand}>
        <img src="/images/services/suspension/ome.png" alt="Old Man Emu" />
        <div className={css.brandInfo}>
          <h3>Old Man Emu (OME): Off-Road & Overland Reliability</h3>

          <p>
            OME is known for robust off-road suspension kits and durable
            rebuildable shocks.
          </p>

          <ul className={css.brandList}>
            <li>
              <strong>MT64 / BP-51</strong> — Rebuildable monotube shocks with
              high pressure gas and adjustable damping.
            </li>
            <li>
              Excellent compliance on rough terrain and long-term durability.
            </li>
          </ul>

          <p>OME is a strong alternative to Bilstein for off-road builds.</p>
        </div>
      </div>

      {/* KONI */}
      <div className={css.brand}>
        <img src="/images/services/suspension/koni.png" alt="KONI" />
        <div className={css.brandInfo}>
          <h3>KONI: Tunable Value & Adjustable Performance</h3>

          <p>
            KONI is famous for adjustable shocks that allow fine-tuning between
            comfort and control.
          </p>

          <ul className={css.brandList}>
            <li>
              <strong>Yellow (Sport)</strong> — Adjustable rebound for a
              tailored ride.
            </li>
            <li>Great pairing with lowering springs.</li>
          </ul>

          <p>
            KONI is a top pick if you want tunability and performance without
            the premium price of Öhlins.
          </p>
        </div>
      </div>
    </div>
  );
}
