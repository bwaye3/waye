<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/gavias_edupia/templates/node/node--team.html.twig */
class __TwigTemplate_e031e65a5edcec0968d17001199f02cdd3fd469af8244e09f4428e1ba46f5971 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["if" => 1, "for" => 25, "set" => 26];
        $filters = ["escape" => 3, "e" => 22, "split" => 26, "clean_class" => 102, "t" => 117, "without" => 164, "render" => 167];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['if', 'for', 'set'],
                ['escape', 'e', 'split', 'clean_class', 't', 'without', 'render'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        if ((($context["view_mode"] ?? null) == "teaser")) {
            echo " 
  <div class=\"team-block team-teaser-1\">
    <div class=\"team-image\">";
            // line 3
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_team_image", [])), "html", null, true);
            echo "
      <div class=\"socials\">
        
        ";
            // line 6
            if ($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_facebook", []), "value", [])) {
                // line 7
                echo "          <a class=\"gva-social\" href=\"";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_facebook", []), "value", [])), "html", null, true);
                echo "\"><i class=\"fab fa-facebook\"></i></a>
        ";
            }
            // line 8
            echo " 
        ";
            // line 9
            if ($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_linkedin", []), "value", [])) {
                // line 10
                echo "          <a class=\"gva-social\" href=\"";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_linkedin", []), "value", [])), "html", null, true);
                echo "\"><i class=\"fab fa-linkedin\"></i></a>
        ";
            }
            // line 11
            echo " 
        ";
            // line 12
            if ($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_pinterest", []), "value", [])) {
                // line 13
                echo "          <a class=\"gva-social\" href=\"";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_pinterest", []), "value", [])), "html", null, true);
                echo "\"><i class=\"fab fa-pinterest\"></i></a>
        ";
            }
            // line 14
            echo " 
        ";
            // line 15
            if ($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_twitter", []), "value", [])) {
                // line 16
                echo "          <a class=\"gva-social\" href=\"";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_twitter", []), "value", [])), "html", null, true);
                echo "\"><i class=\"fab fa-twitter\"></i></a>
        ";
            }
            // line 18
            echo "
      </div>
    </div>
    <div class=\"team-content\">
      <div class=\"team-job\">";
            // line 22
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_position", []), "value", [])));
            echo "</div>
      <div class=\"team-name\"><a href=\"";
            // line 23
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["url"] ?? null)), "html", null, true);
            echo "\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_name", []), "value", [])));
            echo "</a></div>   
      <div class=\"team-skills\">
      ";
            // line 25
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["node"] ?? null), "field_team_skills", []));
            foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                // line 26
                echo "        ";
                $context["skill"] = twig_split_filter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["item"], "value", [])), "--");
                // line 27
                echo "          ";
                if (($this->getAttribute(($context["skill"] ?? null), "0", [], "array") && $this->getAttribute(($context["skill"] ?? null), "1", [], "array"))) {
                    // line 28
                    echo "            <div class=\"team-skill\">
              <div class=\"progress-label\">";
                    // line 29
                    echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["skill"] ?? null), "0", [], "array")), "html", null, true);
                    echo "</div>
               <div class=\"progress\">
                 <div class=\"progress-bar\" data-progress-animation=\"";
                    // line 31
                    echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["skill"] ?? null), "1", [], "array")), "html", null, true);
                    echo "%\"><span></span></div>
                 <span class=\"percentage\"><span></span>";
                    // line 32
                    echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["skill"] ?? null), "1", [], "array")), "html", null, true);
                    echo "%</span>
              </div>
            </div>
          ";
                }
                // line 35
                echo "  
      ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 36
            echo " 
    </div>
    </div>
  </div>  
";
        } elseif ((        // line 40
($context["view_mode"] ?? null) == "teaser_2")) {
            echo " 
  <div class=\"team-block team-teaser-2\">
    <div class=\"team-block-inner\">
      <div class=\"team-image\">";
            // line 43
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_team_image", [])), "html", null, true);
            echo "
        <div class=\"socials\">
          ";
            // line 45
            if ($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_facebook", []), "value", [])) {
                // line 46
                echo "            <a class=\"gva-social\" href=\"";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_facebook", []), "value", [])), "html", null, true);
                echo "\"><i class=\"fab fa-facebook\"></i></a>
          ";
            }
            // line 47
            echo " 
          ";
            // line 48
            if ($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_linkedin", []), "value", [])) {
                // line 49
                echo "            <a class=\"gva-social\" href=\"";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_linkedin", []), "value", [])), "html", null, true);
                echo "\"><i class=\"fab fa-linkedin\"></i></a>
          ";
            }
            // line 50
            echo " 
          ";
            // line 51
            if ($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_pinterest", []), "value", [])) {
                // line 52
                echo "            <a class=\"gva-social\" href=\"";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_pinterest", []), "value", [])), "html", null, true);
                echo "\"><i class=\"fab fa-pinterest\"></i></a>
          ";
            }
            // line 53
            echo " 
          ";
            // line 54
            if ($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_twitter", []), "value", [])) {
                // line 55
                echo "            <a class=\"gva-social\" href=\"";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_twitter", []), "value", [])), "html", null, true);
                echo "\"><i class=\"fab fa-twitter\"></i></a>
          ";
            }
            // line 56
            echo " 
        </div>
      </div>
      <div class=\"team-content\">
        <div class=\"team-job\">";
            // line 60
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_position", []), "value", [])));
            echo "</div>
        <div class=\"team-name\"><a href=\"";
            // line 61
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["url"] ?? null)), "html", null, true);
            echo "\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_name", []), "value", [])));
            echo "</a></div>   
        <div class=\"team-body\">";
            // line 62
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "body", [])), "html", null, true);
            echo "</div>
      </div>
    </div> 
  </div>  
";
        } elseif ((        // line 66
($context["view_mode"] ?? null) == "teaser_3")) {
            echo " 
  <div class=\"team-block team-teaser-3\">
    <div class=\"team-image\">";
            // line 68
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_team_image", [])), "html", null, true);
            echo "</div>
    <div class=\"team-content\">
      <div class=\"team-name\"><a href=\"";
            // line 70
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["url"] ?? null)), "html", null, true);
            echo "\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_name", []), "value", [])));
            echo "</a></div>   
      <div class=\"team-job\">";
            // line 71
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_position", []), "value", [])));
            echo "</div>   
    </div>
  </div>  
";
        } elseif ((        // line 74
($context["view_mode"] ?? null) == "teaser_4")) {
            echo " 
  <div class=\"team-block team-teaser-4\">
    <div class=\"team-image\">";
            // line 76
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_team_image", [])), "html", null, true);
            echo "</div>
    <div class=\"team-content\">
      <div class=\"team-name\"><a href=\"";
            // line 78
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["url"] ?? null)), "html", null, true);
            echo "\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_name", []), "value", [])));
            echo "</a></div>   
      <div class=\"team-job\">";
            // line 79
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_position", []), "value", [])));
            echo "</div>
      <div class=\"socials\">
        ";
            // line 81
            if ($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_facebook", []), "value", [])) {
                // line 82
                echo "          <a class=\"gva-social\" href=\"";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_facebook", []), "value", [])), "html", null, true);
                echo "\"><i class=\"fab fa-facebook\"></i></a>
        ";
            }
            // line 83
            echo " 
        ";
            // line 84
            if ($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_linkedin", []), "value", [])) {
                // line 85
                echo "          <a class=\"gva-social\" href=\"";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_linkedin", []), "value", [])), "html", null, true);
                echo "\"><i class=\"fab fa-linkedin\"></i></a>
        ";
            }
            // line 86
            echo " 
        ";
            // line 87
            if ($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_pinterest", []), "value", [])) {
                // line 88
                echo "          <a class=\"gva-social\" href=\"";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_pinterest", []), "value", [])), "html", null, true);
                echo "\"><i class=\"fab fa-pinterest\"></i></a>
        ";
            }
            // line 89
            echo " 
        ";
            // line 90
            if ($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_twitter", []), "value", [])) {
                // line 91
                echo "          <a class=\"gva-social\" href=\"";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_twitter", []), "value", [])), "html", null, true);
                echo "\"><i class=\"fab fa-twitter\"></i></a>
        ";
            }
            // line 93
            echo "      </div>
    </div>
  </div>  
";
        } else {
            // line 97
            echo "
";
            // line 99
            $context["classes"] = [0 => "node", 1 => "node-detail", 2 => ("node--type-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed($this->getAttribute(            // line 102
($context["node"] ?? null), "bundle", [])))), 3 => (($this->getAttribute(            // line 103
($context["node"] ?? null), "isPromoted", [], "method")) ? ("node--promoted") : ("")), 4 => (($this->getAttribute(            // line 104
($context["node"] ?? null), "isSticky", [], "method")) ? ("node--sticky") : ("")), 5 => (( !$this->getAttribute(            // line 105
($context["node"] ?? null), "isPublished", [], "method")) ? ("node--unpublished") : ("")), 6 => ((            // line 106
($context["view_mode"] ?? null)) ? (("node--view-mode-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["view_mode"] ?? null))))) : ("")), 7 => "clearfix"];
            // line 110
            echo "
<article";
            // line 111
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method")), "html", null, true);
            echo ">
  <div class=\"team-single-page\">
    <div class=\"row\">
      <div class=\"col-md-3 col-sm-3 col-xs-12\">
        <div class=\"team-image\">";
            // line 115
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_team_image", [])), "html", null, true);
            echo "</div>
        <div class=\"team-contact margin-top-10\">
            <div class=\"heading\">";
            // line 117
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Contact Info"));
            echo "</div>
            <div class=\"content-inner\">";
            // line 118
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_team_contact", [])), "html", null, true);
            echo "</div>
            <div class=\"socials\">
              ";
            // line 120
            if ($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_facebook", []), "value", [])) {
                // line 121
                echo "                <a class=\"gva-social\" href=\"";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_facebook", []), "value", [])), "html", null, true);
                echo "\"><i class=\"fab fa-facebook\"></i></a>
              ";
            }
            // line 122
            echo " 
              ";
            // line 123
            if ($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_linkedin", []), "value", [])) {
                // line 124
                echo "                <a class=\"gva-social\" href=\"";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_linkedin", []), "value", [])), "html", null, true);
                echo "\"><i class=\"fab fa-linkedin\"></i></a>
              ";
            }
            // line 125
            echo " 
              ";
            // line 126
            if ($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_pinterest", []), "value", [])) {
                // line 127
                echo "                <a class=\"gva-social\" href=\"";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_pinterest", []), "value", [])), "html", null, true);
                echo "\"><i class=\"fab fa-pinterest\"></i></a>
              ";
            }
            // line 128
            echo " 
              ";
            // line 129
            if ($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_twitter", []), "value", [])) {
                // line 130
                echo "                <a class=\"gva-social\" href=\"";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_twitter", []), "value", [])), "html", null, true);
                echo "\"><i class=\"fab fa-twitter\"></i></a>
              ";
            }
            // line 132
            echo "            </div>
          </div>
      </div>
      <div class=\"col-md-9 col-sm-9 col-xs-12\">
        <div class=\"team-name clearfix\">
          <div class=\"name\"><h1>";
            // line 137
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_name", []), "value", [])));
            echo "</h1></div>
          <div class=\"job\">";
            // line 138
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_team_position", []), "value", [])));
            echo "</div>
        </div> 
        <div class=\"team-description\">";
            // line 140
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_team_description", [])), "html", null, true);
            echo "</div>
        <div class=\"team-info\">
          <div class=\"team-education\">
            <div class=\"heading\">";
            // line 143
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Education"));
            echo "</div>
            <div class=\"content-inner\">";
            // line 144
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_team_education", [])), "html", null, true);
            echo "</div>
          </div>
        </div>

        <div class=\"team-skills\">
          ";
            // line 149
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["node"] ?? null), "field_team_skills", []));
            foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                // line 150
                echo "            ";
                $context["skill"] = twig_split_filter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["item"], "value", [])), "--");
                // line 151
                echo "              ";
                if (($this->getAttribute(($context["skill"] ?? null), "0", [], "array") && $this->getAttribute(($context["skill"] ?? null), "1", [], "array"))) {
                    // line 152
                    echo "                <div class=\"team-skill\">
                  <div class=\"progress-label\">";
                    // line 153
                    echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["skill"] ?? null), "0", [], "array")), "html", null, true);
                    echo "</div>
                   <div class=\"progress\">
                     <div class=\"progress-bar\" data-progress-animation=\"";
                    // line 155
                    echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["skill"] ?? null), "1", [], "array")), "html", null, true);
                    echo "%\"><span></span></div>
                     <span class=\"percentage\"><span></span>";
                    // line 156
                    echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["skill"] ?? null), "1", [], "array")), "html", null, true);
                    echo "%</span>
                  </div>
                </div>
              ";
                }
                // line 159
                echo "  
          ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 160
            echo " 
        </div>

        <div";
            // line 163
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content_attributes"] ?? null), "addClass", [0 => "node__content", 1 => "clearfix"], "method")), "html", null, true);
            echo ">
          ";
            // line 164
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->withoutFilter($this->sandbox->ensureToStringAllowed(($context["content"] ?? null)), "field_team_name", "field_team_contact", "field_team_image", "field_team_contact", "field_team_skills", "field_team_quote", "field_team_pinterest", "field_team_linkedin", "field_team_facebook", "field_team_twitter", "field_team_google", "field_team_education", "field_team_position", "field_team_email", "field_team_description", "comment"), "html", null, true);
            echo "
        </div>
        
        ";
            // line 167
            if ($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["content"] ?? null), "field_team_quote", []))) {
                // line 168
                echo "          <div class=\"team-quote\"> ";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_team_quote", [])), "html", null, true);
                echo " </div>
        ";
            }
            // line 169
            echo "  
      </div>
     
    ";
            // line 172
            if ($this->getAttribute(($context["content"] ?? null), "comment", [])) {
                // line 173
                echo "      <div id=\"node-single-comment\">
        ";
                // line 174
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "comment", [])), "html", null, true);
                echo "
      </div>
    ";
            }
            // line 176
            echo "  

  </div>
</article>

<!-- End Display article for detail page -->
";
        }
        // line 183
        echo "
";
    }

    public function getTemplateName()
    {
        return "themes/gavias_edupia/templates/node/node--team.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  524 => 183,  515 => 176,  509 => 174,  506 => 173,  504 => 172,  499 => 169,  493 => 168,  491 => 167,  485 => 164,  481 => 163,  476 => 160,  469 => 159,  462 => 156,  458 => 155,  453 => 153,  450 => 152,  447 => 151,  444 => 150,  440 => 149,  432 => 144,  428 => 143,  422 => 140,  417 => 138,  413 => 137,  406 => 132,  400 => 130,  398 => 129,  395 => 128,  389 => 127,  387 => 126,  384 => 125,  378 => 124,  376 => 123,  373 => 122,  367 => 121,  365 => 120,  360 => 118,  356 => 117,  351 => 115,  344 => 111,  341 => 110,  339 => 106,  338 => 105,  337 => 104,  336 => 103,  335 => 102,  334 => 99,  331 => 97,  325 => 93,  319 => 91,  317 => 90,  314 => 89,  308 => 88,  306 => 87,  303 => 86,  297 => 85,  295 => 84,  292 => 83,  286 => 82,  284 => 81,  279 => 79,  273 => 78,  268 => 76,  263 => 74,  257 => 71,  251 => 70,  246 => 68,  241 => 66,  234 => 62,  228 => 61,  224 => 60,  218 => 56,  212 => 55,  210 => 54,  207 => 53,  201 => 52,  199 => 51,  196 => 50,  190 => 49,  188 => 48,  185 => 47,  179 => 46,  177 => 45,  172 => 43,  166 => 40,  160 => 36,  153 => 35,  146 => 32,  142 => 31,  137 => 29,  134 => 28,  131 => 27,  128 => 26,  124 => 25,  117 => 23,  113 => 22,  107 => 18,  101 => 16,  99 => 15,  96 => 14,  90 => 13,  88 => 12,  85 => 11,  79 => 10,  77 => 9,  74 => 8,  68 => 7,  66 => 6,  60 => 3,  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/gavias_edupia/templates/node/node--team.html.twig", "/Users/bradleywaye/Sites/local.waye.com/themes/gavias_edupia/templates/node/node--team.html.twig");
    }
}
