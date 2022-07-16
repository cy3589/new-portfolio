import { Badge, Container, ListItem, UnorderedList } from '@chakra-ui/react';
import P from '@components/styled/P';
import Title from '@components/Title';
import Layout from '@layouts/Layout';
import Section from '@layouts/Section';
import { FC } from 'react';

const Sleact: FC = () => (
  <Layout title="Sleact">
    <Container>
      <Title>
        Sleact <Badge>2022</Badge>
      </Title>
      <P>
        P2P private file sharing tool with MSN Messenger integration for Windows
      </P>
      <P>
        「MSN Messenger」と連係して特定ユーザーとP2Pフォルダ共有できる「Amembo」
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>ファイル転送がサイズ制限無く高速に出来ます。</ListItem>
        <ListItem>複数のコンピュータ間で同時に通信が出来ます。</ListItem>
        <ListItem>
          簡単接続機能により、面倒な接続作業を自動で行います。
        </ListItem>
        <ListItem>
          一つのポート開放だけで、様々な通信が出来る強力なプロトコル。
        </ListItem>
        <ListItem>
          IM機能を装備しています。会話中に写真を表示したりもできます。
        </ListItem>
        <ListItem>
          ファイル共有機能で、設定した公開フォルダを相手に見せることが出来ます。
        </ListItem>
        <ListItem>MSN/Windowsメッセンジャーからの招待で接続できます。</ListItem>
        <ListItem>
          画面転送機能で、相手に自分のデスクトップを見せることが出来ます。
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
);
export default Sleact;
