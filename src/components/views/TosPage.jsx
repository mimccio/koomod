import React from 'react'
import styled from 'styled-components'

import { PageWrapper } from '../comps/layouts'
import palette from '../../style/palette'

const Wrapper = styled.div`
  color: ${palette.text};
  padding: 20px;
  line-height: 20px;
`

const Title = styled.h2`padding-bottom: 10px;`

const SubTitle = styled.h3`padding-bottom: 6px;`

const List = styled.ol`padding: 0 0 4px 30px;`

const SubList = styled.ol`padding: 0 0 4px 38px;`

const Paragraph = styled.p`padding-bottom: 6px;`

export default () => (
  <PageWrapper>
    <Wrapper>
      <Title>komi Terms of Service</Title>
      <SubTitle>1. Terms</SubTitle>
      <Paragraph>
        By accessing the website at <a href='http://komi.recipes'>http://komi.recipes</a>, you are agreeing to be bound
        by these terms of service, all applicable laws and regulations, and agree that you are responsible for
        compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from
        using or accessing this site. The materials contained in this website are protected by applicable copyright and
        trademark law.
      </Paragraph>
      <SubTitle>2. Use License</SubTitle>
      <List type='a'>
        <li>
          Permission is granted to temporarily download one copy of the materials (information or software) on
          komi&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not
          a transfer of title, and under this license you may not:
          <SubList type='i'>
            <li>modify or copy the materials;</li>
            <li>
              use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
            </li>
            <li>attempt to decompile or reverse engineer any software contained on komi&apos;s website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or &quot;mirror&quot; the materials on any other server.</li>
          </SubList>
        </li>
        <li>
          This license shall automatically terminate if you violate any of these restrictions and may be terminated by
          komi at any time. Upon terminating your viewing of these materials or upon the termination of this license,
          you must destroy any downloaded materials in your possession whether in electronic or printed format.
        </li>
      </List>
      <SubTitle>3. Disclaimer</SubTitle>
      <List type='a'>
        <li>
          The materials on komi&apos;s website are provided on an &apos;as is&apos; basis. komi makes no warranties,
          expressed or implied, and hereby disclaims and negates all other warranties including, without limitation,
          implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
          intellectual property or other violation of rights.
        </li>
        <li>
          Further, komi does not warrant or make any representations concerning the accuracy, likely results, or
          reliability of the use of the materials on its website or otherwise relating to such materials or on any sites
          linked to this site.
        </li>
      </List>
      <SubTitle>4. Limitations</SubTitle>
      <Paragraph>
        In no event shall komi or its suppliers be liable for any damages (including, without limitation, damages for
        loss of data or profit, or due to business interruption) arising out of the use or inability to use the
        materials on komi&apos;s website, even if komi or a komi authorized representative has been notified orally or
        in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied
        warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply
        to you.
      </Paragraph>
      <SubTitle>5. Accuracy of materials</SubTitle>
      <Paragraph>
        The materials appearing on komi website could include technical, typographical, or photographic errors. komi
        does not warrant that any of the materials on its website are accurate, complete or current. komi may make
        changes to the materials contained on its website at any time without notice. However komi does not make any
        commitment to update the materials.
      </Paragraph>
      <SubTitle>6. Links</SubTitle>
      <Paragraph>
        komi has not reviewed all of the sites linked to its website and is not responsible for the contents of any such
        linked site. The inclusion of any link does not imply endorsement by komi of the site. Use of any such linked
        website is at the user&apos;s own risk.
      </Paragraph>
      <SubTitle>7. Modifications</SubTitle>
      <Paragraph>
        komi may revise these terms of service for its website at any time without notice. By using this website you are
        agreeing to be bound by the then current version of these terms of service.
      </Paragraph>
      <SubTitle>8. Governing Law</SubTitle>
      <Paragraph>
        These terms and conditions are governed by and construed in accordance with the laws of france and you
        irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
      </Paragraph>
    </Wrapper>
  </PageWrapper>
)
