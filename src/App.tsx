import "./App.css";
import React from "react";
import { Box, BoxProps } from "./Box";

const RedBox: React.FC<BoxProps> = ({ ...props }) => (
  <Box {...props} className="RedBox" />
);

export default function App() {
  return (
    <div className="App">
      <div className="BoxExample">
        <h2 className="width--md">The Box Component</h2>
        <p className="width--md">
          Below is a quick demonstration of the layouts you can produce with the
          Box component. Stacking background colors are used for demonstration
          purposes and are not part of the Box component iself.
        </p>
        <Box direction="row" inlinify="lg" alignment="start" stack="xxl">
          <Box stackify="md" insetify="md" flex="2">
            <Box>
              <h1>Main Column</h1>
            </Box>
            <Box direction="row" inlinify="md" inset="none" insetify="md">
              <Box>Flex 1</Box>
              <Box>Flex 1</Box>
              <Box>Flex 1</Box>
            </Box>
            <Box direction="row" inlinify="md" inset="none" insetify="md">
              <Box flex="0">Flex 0</Box>
              <Box>Flex 1</Box>
            </Box>
            <Box inset="lg" alignment="center" justification="center">
              <Box inset="md">Completely centered</Box>
            </Box>
            <Box>Flex 1</Box>
          </Box>
          <Box stackify="sm" insetify="sm" flex="1">
            <Box>
              <h2>Aside Column</h2>
            </Box>
            <Box>Flex 1</Box>
            <Box>Flex 1</Box>
            <Box>Flex 1</Box>
          </Box>
        </Box>
        <h2 className="width--md">What is Box?</h2>
        <Box tag="p" className="width--md unbox" stack="md">
          Box is a general-purpose flex-based React component that integrates
          several unique features that lets you write clean and precise layouts.
        </Box>
        <Box tag="p" className="width--md unbox" stack="xxl">
          This page details what Box can do.
        </Box>
        <h2 className="width--md">Features</h2>
        <h3 className="width--md">Spacing</h3>
        <p className="width--md">
          There are three types of spacing: <b>Inset</b>, <b>Inline</b>, and{" "}
          <b>Stack</b> (inline is horizontal margin, stack is vertical margin,
          and inset is padding). In theory any UI can be built with just these
          three spaces.
        </p>
        <h4 className="width--md">Stack</h4>
        <p className="width--md">
          Stack defines the margin bottom spacing of a Box.
        </p>
        <Box direction="row" stack="lg">
          <Box>
            <Box stack="xxs">XXS stack</Box>
            <Box stack="xs">XS stack</Box>
            <Box stack="sm">SM stack</Box>
            <Box stack="md">MD stack</Box>
            <Box stack="lg">LG stack</Box>
            <Box stack="xl">XL stack</Box>
            <Box stack="xxl">XXL stack</Box>
          </Box>
          <Box inset="md" className="code-side">
            <h4>Code:</h4>
            <pre>
              {`<Box stack="xxs">XXS stack</Box>
<Box stack="xs">XS stack</Box>
<Box stack="sm">SM stack</Box>
<Box stack="md">MD stack</Box>
<Box stack="lg">LG stack</Box>
<Box stack="xl">XL stack</Box>
<Box stack="xxl">XXL stack</Box>`}
            </pre>
          </Box>
        </Box>
        <h4 className="width--md">Inline</h4>
        <p className="width--md">
          Inline defines the margin right spacing of a Box.
        </p>
        <Box direction="row" stack="lg">
          <Box direction="row">
            <Box inline="xxs">XXS inline</Box>
            <Box inline="xs">XS inline</Box>
            <Box inline="sm">SM inline</Box>
            <Box inline="md">MD inline</Box>
            <Box inline="lg">LG inline</Box>
            <Box inline="xl">XL inline</Box>
            <Box inline="xxl">XXL inline</Box>
          </Box>
          <Box inset="md" className="code-side">
            <h4>Code:</h4>
            <pre>
              {`<Box inline="xxs">XXS inline</Box>
<Box inline="xs">XS inline</Box>
<Box inline="sm">SM inline</Box>
<Box inline="md">MD inline</Box>
<Box inline="lg">LG inline</Box>
<Box inline="xl">XL inline</Box>
<Box inline="xxl">XXL inline</Box>`}
            </pre>
          </Box>
        </Box>
        <h4 className="width--md">Inset</h4>
        <p className="width--md">Inset defines the padding of Box.</p>
        <Box direction="row" stack="xl">
          <Box stackify="sm">
            <Box inset="xxs">XXS inset</Box>
            <Box inset="xs">XS inset</Box>
            <Box inset="sm">SM inset</Box>
            <Box inset="md">MD inset</Box>
            <Box inset="lg">LG inset</Box>
            <Box inset="xl">XL inset</Box>
            <Box inset="xxl">XXL inset</Box>
          </Box>
          <Box inset="md" className="code-side">
            <h4>Code:</h4>
            <pre>
              {`<Box inset="xxs">XXS inset</Box>
<Box inset="xs">XS inset</Box>
<Box inset="sm">SM inset</Box>
<Box inset="md">MD inset</Box>
<Box inset="lg">LG inset</Box>
<Box inset="xl">XL inset</Box>
<Box inset="xxl">XXL inset</Box>`}
            </pre>
          </Box>
        </Box>
        <h4 className="width--md">InsetDisable</h4>
        <p>
          This prop takes in a string that contains any one of the
          &#34;tlbr&#34; (top, left, bottom, right) letters in any order.
        </p>
        <Box direction="row" stack="lg">
          <Box>
            <Box flex="0" stackify="md" insetify="md">
              <Box>Inset MD</Box>
              <Box insetDisable="l">Inset MD + insetDisable="l"</Box>
              <Box insetDisable="t">Inset MD + insetDisable="t"</Box>
              <Box insetDisable="r">Inset MD + insetDisable="r"</Box>
              <Box insetDisable="b">Inset MD + insetDisable="b"</Box>
              <Box insetDisable="tb">Inset MD + insetDisable="tb"</Box>
              <Box insetDisable="tbl">Inset MD + insetDisable="tbl"</Box>
            </Box>
          </Box>
          <Box inset="md" className="code-side">
            <h4>Code:</h4>
            <pre>
              {`<Box>Inset MD</Box>
<Box insetDisable="l">
  Inset MD + insetDisable="l"
</Box>
<Box insetDisable="t">
  Inset MD + insetDisable="t"
</Box>
<Box insetDisable="r">
  Inset MD + insetDisable="r"
</Box>
<Box insetDisable="b">
  Inset MD + insetDisable="b"
</Box>
<Box insetDisable="tb">
  Inset MD + insetDisable="tb"
</Box>
<Box insetDisable="tbl">
  Inset MD + insetDisable="tbl"
</Box>`}
            </pre>
          </Box>
        </Box>
        <p className="width--md">
          With InsetDisable, you can create layouts like this sectioned content
          layout below that creates the illusion of one block when it's actually
          multiple blocks:
        </p>
        <Box direction="row" stack="xl">
          <Box>
            <Box flex="0">
              <Box
                inset="lg"
                insetDisable="b"
                style={{ border: "1px dashed black" }}
              >
                Inset LG + disable Bottom padding
              </Box>
              <Box
                inset="lg"
                insetDisable="tb"
                style={{ border: "1px dashed black" }}
              >
                Inset LG + disable Top and Bottom padding
              </Box>
              <Box
                inset="lg"
                insetDisable="tb"
                style={{ border: "1px dashed black" }}
              >
                Inset LG + disable Top and Bottom padding
              </Box>
              <Box
                inset="lg"
                insetDisable="tb"
                style={{ border: "1px dashed black" }}
              >
                Inset LG + disable Top and Bottom padding
              </Box>
              <Box
                inset="lg"
                insetDisable="tb"
                style={{ border: "1px dashed black" }}
              >
                Inset LG + disable Top and Bottom padding
              </Box>
              <Box
                inset="lg"
                insetDisable="tb"
                style={{ border: "1px dashed black" }}
              >
                Inset LG + disable Top and Bottom padding
              </Box>
              <Box
                inset="lg"
                insetDisable="t"
                style={{ border: "1px dashed black" }}
              >
                Inset LG + disable Top padding
              </Box>
            </Box>
          </Box>
          <Box inset="md" className="code-side">
            <h4>Code:</h4>
            <pre>
              {`<Box inset="lg" insetDisable="b" style={{ border: '1px dashed black' }}>
    Inset LG + disable Bottom padding
</Box>
<Box
    inset="lg"
    insetDisable="tb"
    style={{ border: '1px dashed black' }}
>
    Inset LG + disable Top and Bottom padding
</Box>
<Box
    inset="lg"
    insetDisable="tb"
    style={{ border: '1px dashed black' }}
>
    Inset LG + disable Top and Bottom padding
</Box>
<Box
    inset="lg"
    insetDisable="tb"
    style={{ border: '1px dashed black' }}
>
    Inset LG + disable Top and Bottom padding
</Box>
<Box
    inset="lg"
    insetDisable="tb"
    style={{ border: '1px dashed black' }}
>
    Inset LG + disable Top and Bottom padding
</Box>
<Box
    inset="lg"
    insetDisable="tb"
    style={{ border: '1px dashed black' }}
>
    Inset LG + disable Top and Bottom padding
</Box>
<Box inset="lg" insetDisable="t" style={{ border: '1px dashed black' }}>
    Inset LG + disable Top padding
</Box>`}
            </pre>
          </Box>
        </Box>
        <h3 className="width--md">
          Box can pass spacing props to children Boxes
        </h3>
        <p className="width--md">
          A Box can define the spacing of any direct child Box. In the example
          below, the Parent Box defines a single <b>stackify</b> prop, whose
          value is passed to each direct child Box&#39;s <b>stack</b> property.
        </p>
        <Box direction="row" stack="lg">
          <Box stackify="sm">
            <Box>Stack SM</Box>
            <Box>Stack SM</Box>
            <Box>Stack SM</Box>
            <Box>Stack SM</Box>
            <Box>No Stack</Box>
          </Box>
          <Box inset="md" className="code-side">
            <h4>Code:</h4>
            <pre>
              {`<Box stackify="sm">
    <Box>stack 1</Box>
    <Box>stack 2</Box>
    <Box>stack 3</Box>
    <Box>stack 4</Box>
    <Box>stack 5</Box>
</Box>`}
            </pre>
          </Box>
        </Box>
        <p className="width--md">
          In addition to <b>stackify</b>, there are also <b>inlinify</b> and{" "}
          <b>insetify</b> (and <b>insetDisablify</b> for disabling specific
          sides of the inset spacing).
        </p>
        <Box direction="row" stack="lg">
          <Box>
            <Box flex="0" direction="row" inlinify="sm" insetify="lg">
              <Box>Inline SM + Inset LG</Box>
              <Box>Inline SM + Inset LG</Box>
              <Box>No Inline + Inset LG</Box>
            </Box>
          </Box>
          <Box inset="md" className="code-side">
            <h4>Code:</h4>
            <pre>
              {`<Box flex="0" direction="row" inlinify="sm" insetify="lg">
    <Box>Inline SM + Inset LG</Box>
    <Box>Inline SM + Inset LG</Box>
    <Box>No Inline + Inset LG</Box>
</Box>`}
            </pre>
          </Box>
        </Box>
        <p className="width--md">
          Notice how for both <b>stackify</b> and <b>inlinify</b>, the last
          child does not receive a space value. Traditionally, this is handled
          through{" "}
          <a
            href="https://alistapart.com/article/axiomatic-css-and-lobotomized-owls"
            target="_blank"
            rel="noopener noreferrer"
          >
            Axiomatic CSS
          </a>
          , where the parent CSS will define the spacing of its children, the
          last element is disabled, and deviations of this rule means more
          overrides. By handling this logic in ReactJS instead, we remove the
          need to write nested CSS which reduces the need for complicated
          overrides.
        </p>
        <p className="width--md">
          In the example below, sometimes you want all children to have a
          spacing <em>except</em> for one. To do this, you simply target the
          child&#39;s you want to override an <b>-ify</b> prop.
        </p>
        <Box direction="row" stack="lg">
          <Box stackify="sm">
            <Box>Stack SM</Box>
            <Box>Stack SM</Box>
            <Box>Stack SM</Box>
            <Box stack="lg">Stack LG</Box>
            <Box>Stack SM</Box>
            <Box>No Stack</Box>
          </Box>
          <Box inset="md" className="code-side">
            <h4>Code:</h4>
            <pre>
              {`<Box stackify="sm">
    <Box>Stack SM</Box>
    <Box>Stack SM</Box>
    <Box>Stack SM</Box>
    <Box stack="lg">Stack LG</Box>
    <Box>Stack SM</Box>
    <Box>No Stack</Box>
</Box>`}
            </pre>
          </Box>
        </Box>
        <Box className="unbox" stack="xxl">
          <p className="width--md">
            Combining the parent space definitions and the child overrides makes
            Box flexible and declarative.
          </p>
        </Box>
        <h3 className="width--md">Box can be any HTML DOM Element</h3>
        <Box className="unbox" stack="none">
          <p className="width--md">
            By default, a Box is a div, but it can also be another HTML element
            by specifying the `tag` prop.
          </p>
        </Box>
        <Box direction="row" stack="lg">
          <Box stackify="sm">
            <Box tag="h1">H1 Box</Box>
            <Box tag="h2">H2 Box</Box>
            <Box tag="section">Section Box</Box>
            <Box tag="p">P Box</Box>
            <Box tag="span">Span Box</Box>
          </Box>
          <Box inset="md" className="code-side">
            <h4>Code:</h4>
            <pre>
              {`<Box tag="h1">H1 Box</Box>
<Box tag="h2">H2 Box</Box>
<Box tag="section">Section Box</Box>
<Box tag="p">P Box</Box>
<Box tag="span">Span Box</Box>

// output html

<h1 class="Box">H1 Box</h1>
<h2 class="Box">H2 Box</h2>
<section class="Box">Section Box</section>
<p class="Box">P Box</p>
<span class="Box">Span Box</span>
`}
            </pre>
          </Box>
        </Box>
        <h3 className="width--md">
          Box provides a simplified API for building Flexbox layouts.
        </h3>
        <p className="width--md">
          Writing CSS Flexbox manually can be a laborious and involved task that
          requires some experience with CSS. Box provides a simplified set of
          props to define flex for most layout needs.
        </p>

        <h4 className="width--md">Direction</h4>

        <p className="width--md">
          Direction represents the <b>flex-direction</b> css prop. There is only
          row and column for simplicity.
        </p>
        <Box direction="row" stack="lg">
          <Box>
            <p>Row</p>
            <Box direction="row" inlinify="sm" flex="0" stack="lg">
              <Box>1</Box>
              <Box>2</Box>
              <Box>3</Box>
              <Box>4</Box>
            </Box>
            <p>Column</p>
            <Box direction="column" stackify="sm" flex="0">
              <Box>1</Box>
              <Box>2</Box>
              <Box>3</Box>
              <Box>4</Box>
            </Box>
          </Box>
          <Box inset="md" className="code-side">
            <h4>Code:</h4>
            <pre>
              {`<p>Row</p>
<Box direction="row" inlinify="sm" flex="0" stack="lg">
    <Box>1</Box>
    <Box>2</Box>
    <Box>3</Box>
    <Box>4</Box>
</Box>
<p>Column</p>
<Box direction="column" stackify="sm" flex="0">
    <Box>1</Box>
    <Box>2</Box>
    <Box>3</Box>
    <Box>4</Box>
</Box>`}
            </pre>
          </Box>
        </Box>
        <h4 className="width--md">Flex</h4>

        <p className="width--md">
          Flex represents the <b>flex</b> css prop. It takes in a number 1-12
          and each value will generate <b>flex: [val] [val] auto;</b> (i.e.
          flex=&#34;3&#34; generates <b>flex: 3 3 auto;</b>). The flex property
          is useful for making one element take minimal space and another
          element take up remaining space.
        </p>

        <Box direction="row" stack="lg">
          <Box>
            <p>Example 1</p>
            <Box direction="row" inlinify="sm" flex="0" stack="lg">
              <Box>Flex 1</Box>
              <Box flex="0">Flex 0</Box>
            </Box>
            <p>Example 2</p>
            <Box direction="row" inlinify="sm" flex="0" stack="lg">
              <Box flex="2">Flex 2</Box>
              <Box flex="1">Flex 1</Box>
            </Box>
            <p>Example 3</p>
            <Box direction="row" inlinify="sm" flex="0" stack="lg">
              <Box flex="1">Flex 1</Box>
              <Box flex="1">Flex 1</Box>
              <Box flex="1">Flex 1</Box>
            </Box>
            <p>Example 4</p>
            <Box direction="column" stackify="sm">
              <Box flex="0">Flex 0</Box>
              <Box>Flex 1</Box>
            </Box>
          </Box>
          <Box inset="md" className="code-side">
            <h4>Code:</h4>
            <pre>
              {`<p>Example 1</p>
<Box direction="row" inlinify="sm" flex="0" stack="lg">
    <Box>Flex 1</Box>
    <Box flex="0">Flex 0</Box>
</Box>
<p>Example 2</p>
<Box direction="row" inlinify="sm" flex="0" stack="lg">
    <Box flex="2">Flex 2</Box>
    <Box flex="1">Flex 1</Box>
</Box>
<p>Example 3</p>
<Box direction="row" inlinify="sm" flex="0" stack="lg">
    <Box flex="1">Flex 1</Box>
    <Box flex="1">Flex 1</Box>
    <Box flex="1">Flex 1</Box>
</Box>
<p>Example 4</p>
<Box direction="column" stackify="sm">
    <Box flex="0">Flex 0</Box>
    <Box>Flex 1</Box>
</Box>`}
            </pre>
          </Box>
        </Box>
        <h4 className="width--md">Alignment</h4>

        <p className="width--md">
          Alignment represents the <b>align-items</b> css prop. It takes in{" "}
          <b>start</b>, <b>center</b>, <b>end</b>, and <b>stretch</b> for
          simplicity.
        </p>

        <Box direction="row" stack="lg">
          <Box>
            <p>Start Alignment</p>
            <Box
              direction="row"
              alignment="start"
              inlinify="sm"
              flex="0"
              stack="lg"
            >
              <Box>foo</Box>
              <Box>
                foo
                <br />
                bar
              </Box>
              <Box>
                foo
                <br />
                bar
                <br />
                chu
              </Box>
              <Box>chu</Box>
            </Box>
            <p>Center Alignment</p>
            <Box
              direction="row"
              alignment="center"
              inlinify="sm"
              flex="0"
              stack="lg"
            >
              <Box>foo</Box>
              <Box>
                foo
                <br />
                bar
              </Box>
              <Box>
                foo
                <br />
                bar
                <br />
                chu
              </Box>
              <Box>chu</Box>
            </Box>
            <p>End Alignment</p>
            <Box
              direction="row"
              alignment="end"
              inlinify="sm"
              flex="0"
              stack="lg"
            >
              <Box>foo</Box>
              <Box>
                foo
                <br />
                bar
              </Box>
              <Box>
                foo
                <br />
                bar
                <br />
                chu
              </Box>
              <Box>chu</Box>
            </Box>
            <p>Stretch Alignment</p>
            <Box
              direction="row"
              alignment="stretch"
              inlinify="sm"
              flex="0"
              stack="lg"
            >
              <Box>foo</Box>
              <Box>
                foo
                <br />
                bar
              </Box>
              <Box>
                foo
                <br />
                bar
                <br />
                chu
              </Box>
              <Box>chu</Box>
            </Box>
          </Box>
          <Box inset="md" className="code-side">
            <h4>Code:</h4>
            <pre>
              {`<p>Start Alignment</p>
<Box direction="row" alignment="start" inlinify="sm" flex="0" stack="lg">
    <Box>foo</Box>
    <Box>
        foo
        <br />
        bar
    </Box>
    <Box>
        foo
        <br />
        bar
        <br />
        chu
    </Box>
    <Box>chu</Box>
</Box>

<p>Center Alignment</p>
<Box direction="row" alignment="center" inlinify="sm" flex="0" stack="lg">
    <Box>foo</Box>
    <Box>
        foo
        <br />
        bar
    </Box>
    <Box>
        foo
        <br />
        bar
        <br />
        chu
    </Box>
    <Box>chu</Box>
</Box>

<p>End Alignment</p>
<Box direction="row" alignment="end" inlinify="sm" flex="0" stack="lg">
    <Box>foo</Box>
    <Box>
        foo
        <br />
        bar
    </Box>
    <Box>
        foo
        <br />
        bar
        <br />
        chu
    </Box>
    <Box>chu</Box>
</Box>

<p>Stretch Alignment</p>
<Box direction="row" alignment="stretch" inlinify="sm" flex="0" stack="lg">
    <Box>foo</Box>
    <Box>
        foo
        <br />
        bar
    </Box>
    <Box>
        foo
        <br />
        bar
        <br />
        chu
    </Box>
    <Box>chu</Box>
</Box>`}
            </pre>
          </Box>
        </Box>
        <h4 className="width--md">Justification</h4>

        <p className="width--md">
          Justification represents the <b>justify-contents</b> css prop. It
          takes in <b>start</b>, <b>center</b>, <b>end</b>, and <b>space</b> for
          simplicity.
        </p>

        <Box direction="row" stack="lg">
          <Box>
            <p>Start justification</p>
            <Box
              direction="row"
              justification="start"
              inlinify="md"
              flex="0"
              stack="lg"
            >
              <Box flex="0">foo</Box>
              <Box flex="0">bar</Box>
              <Box flex="0">chu</Box>
              <Box flex="0">man</Box>
            </Box>
            <p>Center justification</p>
            <Box
              direction="row"
              justification="center"
              inlinify="md"
              flex="0"
              stack="lg"
            >
              <Box flex="0">foo</Box>
              <Box flex="0">bar</Box>
              <Box flex="0">chu</Box>
              <Box flex="0">man</Box>
            </Box>

            <p>End justification</p>
            <Box
              direction="row"
              justification="end"
              inlinify="md"
              flex="0"
              stack="lg"
            >
              <Box flex="0">foo</Box>
              <Box flex="0">bar</Box>
              <Box flex="0">chu</Box>
              <Box flex="0">man</Box>
            </Box>

            <p>Space justification</p>
            <Box
              direction="row"
              justification="space"
              inlinify="md"
              flex="0"
              stack="lg"
            >
              <Box flex="0">foo</Box>
              <Box flex="0">bar</Box>
              <Box flex="0">chu</Box>
              <Box flex="0">man</Box>
            </Box>
          </Box>
          <Box inset="md" className="code-side">
            <h4>Code:</h4>
            <pre>
              {`<p>Start justification</p>
<Box
    direction="row"
    justification="start"
    inlinify="md"
    flex="0"
    stack="lg"
>
    <Box flex="0">foo</Box>
    <Box flex="0">bar</Box>
    <Box flex="0">chu</Box>
    <Box flex="0">man</Box>
</Box>
<p>Center justification</p>
<Box
    direction="row"
    justification="center"
    inlinify="md"
    flex="0"
    stack="lg"
>
    <Box flex="0">foo</Box>
    <Box flex="0">bar</Box>
    <Box flex="0">chu</Box>
    <Box flex="0">man</Box>
</Box>

<p>End justification</p>
<Box direction="row" justification="end" inlinify="md" flex="0" stack="lg">
    <Box flex="0">foo</Box>
    <Box flex="0">bar</Box>
    <Box flex="0">chu</Box>
    <Box flex="0">man</Box>
</Box>

<p>Space justification</p>
<Box
    direction="row"
    justification="space"
    inlinify="md"
    flex="0"
    stack="lg"
>
    <Box flex="0">foo</Box>
    <Box flex="0">bar</Box>
    <Box flex="0">chu</Box>
    <Box flex="0">man</Box>
</Box>`}
            </pre>
          </Box>
        </Box>
        <h4 className="width--md">AlignSelf</h4>

        <p className="width--md">
          AlignSelf represents the <b>align-self</b> css prop. It takes in{" "}
          <b>start</b>, <b>center</b>, <b>end</b>, and <b>stretch</b> for
          simplicity. AlignSelf is useful for specifying the alignment of an
          individual Box.
        </p>

        <Box direction="row" stack="xxl">
          <Box>
            <p>AlignSelf end</p>
            <Box
              direction="row"
              alignment="start"
              inlinify="sm"
              flex="0"
              stack="lg"
            >
              <Box alignSelf="end">alignSelf=&#34;end&#34;</Box>
              <Box>
                foo
                <br />
                bar
              </Box>
              <Box>
                foo
                <br />
                bar
                <br />
                chu
              </Box>
              <Box>chu</Box>
            </Box>
            <p>AlignSelf center</p>
            <Box
              direction="row"
              alignment="start"
              inlinify="sm"
              flex="0"
              stack="lg"
            >
              <Box alignSelf="center">alignSelf=&#34;center&#34;</Box>
              <Box>
                foo
                <br />
                bar
              </Box>
              <Box>
                foo
                <br />
                bar
                <br />
                chu
              </Box>
              <Box>chu</Box>
            </Box>
            <p>AlignSelf stretch</p>
            <Box
              direction="row"
              alignment="start"
              inlinify="sm"
              flex="0"
              stack="lg"
            >
              <Box alignSelf="stretch">alignSelf=&#34;stretch&#34;</Box>
              <Box>
                foo
                <br />
                bar
              </Box>
              <Box>
                foo
                <br />
                bar
                <br />
                chu
              </Box>
              <Box>chu</Box>
            </Box>
          </Box>
          <Box inset="md" className="code-side">
            <h4>Code:</h4>
            <pre>
              {`<p>AlignSelf end</p>
<Box direction="row" alignment="start" inlinify="sm" flex="0" stack="lg">
    <Box alignSelf="end">alignSelf="end"</Box>
    <Box>
        foo
        <br />
        bar
    </Box>
    <Box>
        foo
        <br />
        bar
        <br />
        chu
    </Box>
    <Box>chu</Box>
</Box>
<p>AlignSelf center</p>
<Box direction="row" alignment="start" inlinify="sm" flex="0" stack="lg">
    <Box alignSelf="center">alignSelf="center"</Box>
    <Box>
        foo
        <br />
        bar
    </Box>
    <Box>
        foo
        <br />
        bar
        <br />
        chu
    </Box>
    <Box>chu</Box>
</Box>
<p>AlignSelf stretch</p>
<Box direction="row" alignment="start" inlinify="sm" flex="0" stack="lg">
    <Box alignSelf="stretch">alignSelf="stretch"</Box>
    <Box>
        foo
        <br />
        bar
    </Box>
    <Box>
        foo
        <br />
        bar
        <br />
        chu
    </Box>
    <Box>chu</Box>
</Box>`}
            </pre>
          </Box>
        </Box>
        <h3 className="width--md">Box&#39;s className is appended</h3>
        <p className="width--md">
          In general, it's important to always allow styles to be overridable.
          Specifying a <b>className</b> string will append (not replace) the
          existing classNames and allow custom style. Ideally, you should follow
          the BEM (Block Element Modifier) because it aligns with
          object-oriented programming. If done properly, you would have styles
          at the proper inheritance level. By design, this allows you to
          gracefully override whatever that needs to be overridden and keep the
          project&#39;s styles separate from Box&#39;s styles.
        </p>
        <Box direction="row" stack="xxl">
          <Box>
            <Box className="YourBox GreenBox" inset="lg" flex="0">
              Box with classNames
            </Box>
          </Box>
          <Box inset="md" className="code-side">
            <h4>Code:</h4>
            <pre>
              {`<Box className="YourBox GreenBox" inset="lg" flex="0">Box with classNames</Box>

// outputs
<div class="Box Box--flex-0 Box--inset-lg YourBox GreenBox">Box with classNames</div>
`}
            </pre>
          </Box>
        </Box>
        <h3 className="width--md">
          Box and{" "}
          <a
            href="https://reactjs.org/docs/composition-vs-inheritance.html#specialization"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Component Specialization
          </a>
        </h3>
        <p className="width--md">
          When creating a new component, you can create new components that
          return Boxes. This technique is called{" "}
          <a
            href="https://reactjs.org/docs/composition-vs-inheritance.html#specialization"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Specialization
          </a>
          , where you create a component that returns another component and
          inherit props. Specialization in ReactJS is similar to traditional{" "}
          <a
            href="https://en.wikipedia.org/wiki/Polymorphism_(computer_science)"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            polymorphism
          </a>{" "}
          and provides similar value to it as well:
        </p>
        <ol>
          <li>
            The new component inherits all of Box&#39;s features listed in this
            document.
          </li>
          <li>
            All the beneficial synergies include the ability for the Parent Box
            to pass down its spacing props to the new specialized componen .
          </li>
          <li>
            Along with appended classNames, the new component only needs to
            concern itself with what needs to be added on top of what Box
            already provides.
          </li>
        </ol>
        <Box direction="row" stack="lg">
          <Box>
            <RedBox flex="0" inset="md">
              Red Box
            </RedBox>
          </Box>
          <Box inset="md" className="code-side">
            <h4>Code:</h4>
            <pre>
              {`// The new RedBox Specialized Component
const RedBox = (props) => (
    <Box {...props} className="RedBox" />
);

// SCSS
.RedBox {
    background-color: red;
    color: white;
}

// Example usage
<RedBox flex="0" inset="md">Red Box</RedBox>

// Outputs
<div class="Box Box--flex-0 Box--inset-md RedBox">Red Box</div>
`}
            </pre>
          </Box>
        </Box>
        <p className="width--md">
          Notice in the SCSS, <b>.Box</b> was not overrided, but instead the new{" "}
          <b>.RedBox</b> className is just providing styles on top of{" "}
          <b>.Box</b>. Using Box like this establishes clear object-oriented
          scoping and separation of concerns that allows UI to be built quickly
          and scalably.
        </p>
      </div>
    </div>
  );
}
