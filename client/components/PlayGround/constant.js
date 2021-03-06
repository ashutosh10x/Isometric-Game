export const toolboxXml = `
<xml id="toolbox" style="display: none">
  <category name="Motion" colour="230" categorystyle="logic_category" expanded="true">
    <block type="move_forward"></block>
    <block type="move_backward"></block>
    <block type="turn_right"></block>
    <block type="turn_left"></block>
  </category>
  <category name="Loops" colour="290" categorystyle="loop_category">
    <block type="repeat"></block>
    <block type="controls_for"></block>
    <block type="controls_whileUntil"></block>
    <block type="repeat_until_destination"></block>
  </category>
  <category name="Conditionals" colour="290" expanded="true">
    <block type="controls_if"></block>
  </category>
  <category name="Numbers" colour="190" expanded="true">
    <block type="text"></block>
    <block type="math_number"></block>
    <block type="math_arithmetic"></block>
    <block type="math_arithmetic">
      <field name="OP">ADD</field>
      <value name="A">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="B">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
    </block>
  </category>
</xml>
`;
