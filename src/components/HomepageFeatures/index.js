import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '轻量',
    description: (
      <>
        我们坚持以最少的mod和材质包，换来更好的游戏体验。
      </>
    ),
  },
  {
    title: '简洁',
    description: (
      <>
        我们不想让一个整合包玩起来很麻烦。
        <br />
        我们争取让这个整合包在使用上更简单，易入手。
      </>
    ),
  },
  {
    title: '单人',
    description: (
      <>
        就如这个词所说...这个材质包更适合单人游玩！
        <br />
        当然，多人游玩也应该毫无问题。
        <br />
        （⚠注意：多人游戏中，Tweakeroo模组和X-Ray透视矿材质包慎用（有几率会被服务器ban））
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
